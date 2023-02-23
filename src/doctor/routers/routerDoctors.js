const express = require('express');
const router = express.Router();
const DoctorsController = require('../Controllers/DoctorsController');
const auth = require('../../../middlewares/auth');
const isAdmin = require('../../../middlewares/isAdmin');
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/config');

router.post("/singup",auth,isAdmin, async (req, res, next) => {
    const password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));
    try{
        res.json(await DoctorsController.newUser({
            name: req.body.name,
            surname: req.body.surname,
            dni: req.body.dni,
            email: req.body.email,
            password: password,
            phone: req.body.phone,
            cipa: req.body.cipa,
            rol:req.body.rol
        }))
    }catch(e){
        res.status(500).json({error: e.message})
        //next(e);
    }
    
});





module.exports = router;