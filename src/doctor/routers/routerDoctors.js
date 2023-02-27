const express = require('express');
const router = express.Router();
const DoctorsController = require('../Controllers/DoctorsController');
const auth = require('../../../middlewares/auth');
const isAdmin = require('../../../middlewares/isAdmin');
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/config');

router.post("/singup",auth,isAdmin, async (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));
    try{
        res.json(await DoctorsController.newDoctor(req.body))
    }catch(e){
        res.status(500).json({error: e.message})
        //next(e);
    }
    
});
router.post("/login", async (req, res, next) => {
    try{
        res.json(await DoctorsController.loginDoctor({
            email: req.body.email,
            password: req.body.password
        }))
    }catch(e){
        res.send("Incorrect user or password");
        //res.status(500).json({error: e.message})
        //next(e);
    }
    
});

router.get("/alluser", async (req, res, next) => {
    try{
        res.json(await DoctorsController.alluser({}))
    }catch(e){
        res.send("ERROR");
        //res.status(500).json({error: e.message})
        //next(e);
    }
    
});


module.exports = router;