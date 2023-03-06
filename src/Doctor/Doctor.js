const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema ({
    name:{
        type: String,
        required: true 
    },
    surname:{
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: false
    }
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;