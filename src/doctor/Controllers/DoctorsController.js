const { query } = require('express');
const Doctor = require('../model/doctor');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../../../config/config');
const DoctorsController = {};

DoctorsController.newUser=async (data)=>{
    const result = await Doctor.create(data);
    return(`El medico ${result.name} a sido creado con exito`)
};

DoctorsController.loginDoctor=async (body)=>{
    let DoctorFound = await Doctor.find({
        email: body.email
    })
    if (DoctorFound) {      
        if (DoctorFound[0].email === undefined) {
            return("Incorrect user or password");
        } else {
            if (bcrypt.compareSync(body.password, DoctorFound[0].password)) { 
                let token = jsonwebtoken.sign({ usuario: DoctorFound }, authConfig.SECRET, {
                    expiresIn: authConfig.EXPIRES
                });
                let loginOk = `Welcome back Dr ${DoctorFound[0].name}`;
                return({
                    loginOk,
                    token: token
                })
            } else {
                return("Incorrect user or password");
            }
        }

    }
};


module.exports = DoctorsController;