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




module.exports = DoctorsController;