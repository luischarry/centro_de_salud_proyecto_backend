const { query } = require('express');
const Doctor = require('./Doctor');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../../config/config');
const DoctorsController = {};

DoctorsController.newDoctor = async (data) => {
    const result = await Doctor.create(data);
    return (`El medico ${result.name} a sido creado con exito`)
};

DoctorsController.loginDoctor = async (body) => {
    const doctor = await Doctor.findOne({
        email: body.email
    })

    if (!doctor) throw new Error("Error");
    
    if (!bcrypt.compareSync(body.password, doctor.password)) throw new Error("Error");

    const token = jsonwebtoken.sign({ id: doctor._id, rol: doctor.rol }, authConfig.SECRET, {
        expiresIn: authConfig.EXPIRES
    });

    doctor.password=undefined
    return {
        token: token,
        doctor: doctor
    }

};
DoctorsController.allDoctors = async () => {
    return Doctor.find({});
};

module.exports = DoctorsController;