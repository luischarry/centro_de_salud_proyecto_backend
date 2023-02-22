const express = require('express');
const router = express.Router();
const UsersController = require('../Controllers/UsersController');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../../../config/config');


router.post("/singup", async (req, res, next) => {
    const password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));
    try{
        res.json(await UsersController.newUser({
            name: req.body.name,
            surname: req.body.surname,
            dni: req.body.dni,
            email: req.body.email,
            password: password,
            phone: req.body.phone,
            cipa: req.body.cipa,
            rol:"user"
        }))
    }catch(e){
        res.status(500).json({error: e.message})
        //next(e);
    }
    
});
router.post("/login", async (req, res, next) => {
    try{
        res.json(await UsersController.loginUser({
            email: req.body.email,
            password: req.body.password
        }))
    }catch(e){
        res.send("Incorrect user or password");
        //res.status(500).json({error: e.message})
        //next(e);
    }
    
});
module.exports = router;