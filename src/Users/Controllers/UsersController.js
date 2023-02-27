const { query } = require('express');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../../../config/config');

const UsersController = {};


UsersController.newUser = async (user) => {
    const result = await User.create(user);
    return (`El usuario ${result.name} a sido creado con exito`)
};
UsersController.loginUser = async (body) => {
    const user = await User.findOne({
        email: body.email
    })
    if (!user) return "Incorrect user or password"

    //Hemos encontrado al usuario, vamos a ver si el pass es correcto      
    if (!bcrypt.compareSync(body.password, user.password)) return "Incorrect user or password"

    const token = jsonwebtoken.sign({ id: user._id, rol:user.rol }, authConfig.SECRET, {
        expiresIn: authConfig.EXPIRES
    });
    user.password=undefined
    return {
        token: token,
        user:user
    }

};
UsersController.allUser = async () => {
    return User.find({});
};
module.exports = UsersController;