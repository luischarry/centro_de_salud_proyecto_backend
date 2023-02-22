const { query } = require('express');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../../../config/config');

const UsersController = {};


UsersController.newUser=async (user)=>{
    const result = await User.create(user);
    return(`El usuario ${result.name} a sido creado con exito`)
};
UsersController.loginUser=async (body)=>{
    let userFound = await User.find({
        email: body.email
    })
    if (userFound) {      
        if (userFound[0].email === undefined) {
            //No hemos encontrado al usuario...mandamos un mensaje
            return("Incorrect user or password");
        } else {
            //Hemos encontrado al usuario, vamos a ver si el pass es correcto      
            if (bcrypt.compareSync(body.password, userFound[0].password)) { 
                let token = jsonwebtoken.sign({ usuario: userFound }, authConfig.SECRET, {
                    expiresIn: authConfig.EXPIRES
                });
                let loginOk = `Welcome back ${userFound[0].name}`;
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

module.exports = UsersController;