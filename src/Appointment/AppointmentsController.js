const { query } = require('express');
const Appointment = require('./Appointment');
const moment = require('moment');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../../config/config');
//const DoctorsController=require('../Doctor/DoctorsController')

const AppointmentsController = {};

AppointmentsController.newAppointment = async (data, token) => {
    const doctorAppointments = await Appointment.find({ doctorId: data.doctorId , date: data.date , time: data.time});
    if (doctorAppointments.length > 0) throw new Error("The doctor already has an appointment on that date and time");

    jsonwebtoken.verify(token, authConfig.SECRET, (err, decoded) => {
        if (err) {
            throw new Error("problem decoding token");
        } else if (decoded.id !== data.userId) {
            throw new Error("cannot create medical appointment");
        }
    })

    Appointment.create(data);
    return 'Appointment created successfully'
    
};
AppointmentsController.getAllAppointment = async (data) => {
    return Appointment.find(data)
        .populate('userId')
        .populate('doctorId')

};
AppointmentsController.getAppointment = async (data) => {
    //cualquier usuaario puede ver las citas de los medicos,pero no ver los de otros usuarios

    const filter = {};
    if (data.userId) filter.userId = data.userId;
    if (data.doctorId) filter.doctorId = data.doctorId;
    filter.date = { $gte: new Date().setHours(0, 0, 0, 0) };
    const result = await Appointment.find(filter)
        //.populate('userId')
        .populate('doctorId')
    if (result.length === 0) {
        return ({ error: 'User not found' })
    } else {
        return (result)
    }
};

AppointmentsController.getAppointmentToday = async (doctor) => {

    // Get the current date and set the time to the start of the day
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setHours(0, 0, 0, 0);
    // Extract the date part of the current date as a string
    const dateString = currentDate.toISOString().split('T')[0];

    // Find appointments for the specified doctor and current date range
    return Appointment.find({
        doctorId: doctor, date: dateString
    })
        .populate('userId')
};
AppointmentsController.deleteAppointment = async (id, token) => {
    const citaElminada = await Appointment.findByIdAndDelete(id);
    if (!citaElminada) return 'cita no encontrada';
    return 'cita eliminada exitosamente'
};
AppointmentsController.generadorcitas = async (data) => {
    //DoctorsController.allDoctors
    //const doctorAppointments = await Appointment.find({ doctorId: data.doctorId });
    //Horas de trabajo (de 9 a 17 horas)
    const horasTrabajo = [];
    const diasHabiles = [1, 2, 3, 4, 5];
    for (let hora = 9; hora <= 17; hora++) {
        horasTrabajo.push(moment().startOf('day').hour(hora).toDate());
    }
    console.log(horasTrabajo)
    // Fecha inicial para generar citas
    const fechaInicial = moment().add(3, 'days').startOf('day').toDate();
    for (let i = 0; i < 5; i++) {
        const fecha = moment(fechaInicial).add(i, 'days').toDate();
        if (diasHabiles.includes(moment(fecha).day())) {
            horasTrabajo.forEach(hora => {
                //Appointment.create({ doctorId: data.doctorId, hora, disponible: true })
                //console.log(({ doctorId: data.doctorId, hora, disponible: true }))
            })
        };
    }
};
module.exports = AppointmentsController;