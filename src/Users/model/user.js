const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
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