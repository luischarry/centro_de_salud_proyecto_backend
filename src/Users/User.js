const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    first_name:{
        type: String,
        required: true 
    },
    second_name:{
        type: String,
        required: true 
    },
    surname:{
        type: String,
        required: true
    },
    second_surname:{
        type: String,
        required: false 
    },
    dni: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    cipa:{
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

const User = mongoose.model("User", userSchema);
module.exports = User;