const { query } = require('express');
const Appointment = require('../model/Appointment');

const AppointmentsController = {};

AppointmentsController.newAppointment=async (data)=>{
    const result = await Appointment.create(data);
    return(`cita creada con exito`)
};
AppointmentsController.getAllAppointment=async (data)=>{
    const result = await Appointment.find(data)
    .populate('userId')
    .populate('doctorId')
    if (result.length === 0) {
        return({ error: 'Not found' })

    } else {
        return(result)
    }
};
AppointmentsController.getAppointment=async (data)=>{
    console.log(data)
    const filter={};
    if(data.userId) filter.userId=data.userId;
    if(data.doctorId) filter.doctorId=data.doctorId;
    const result = await Appointment.find(filter)
    .populate('userId')
    .populate('doctorId')
    if (result.length === 0) {
        return({ error: 'User not found' })
    } else {
        return(result)
    }
};


module.exports = AppointmentsController;