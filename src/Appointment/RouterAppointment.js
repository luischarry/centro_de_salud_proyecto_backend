const express = require('express');
const router = express.Router();
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../../config/config');
const AppointmentsController = require('./AppointmentsController');
const auth = require('../../middlewares/auth');
const isAdmin = require('../../middlewares/isAdmin');
const isDoctor = require('../../middlewares/isDoctor');

router.post("/",auth, async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        res.json(await AppointmentsController.newAppointment(req.body,token))
    } catch (e) {
        res.status(500).json({ error: e.message })
    }

});
router.get("/admin", auth, isAdmin, async (req, res, next) => {                                           
    try {
        res.json(await AppointmentsController.getAllAppointment({}))
    } catch (e) {
        res.status(500).json({ error: e.message })
        //next(e);
    }

});
router.get("/",auth, async (req, res, next) => {
    try {
        res.json(await AppointmentsController.getAppointment(req.query))
    } catch (e) {
        res.status(500).json({ error: e.message })
        //next(e);
    }
});
router.get("/today/:doctor",isDoctor, async (req, res, next) => {
    try {
        res.json(await AppointmentsController.getAppointmentToday(req.params.doctor))
       
    } catch (e) {
        res.status(500).json({ error: e.message })
        //next(e);
    }
});
router.delete("/:id",auth, async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        res.json(await AppointmentsController.deleteAppointment(req.params.id,token))

    } catch (e) {
        res.status(500).json({ error: e.message })
        //next(e);
    }

});
router.get("/admin/generadorcitas", async (req, res, next) => {
    try {
        res.json(await AppointmentsController.generadorcitas(req.body))
    } catch (e) {
        res.status(500).json({ error: e.message })
        //next(e);
    }

});
module.exports = router;