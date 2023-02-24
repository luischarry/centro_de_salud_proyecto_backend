const express = require('express');
const router = express.Router();
const AppointmentsController = require('../Controllers/AppointmentsController');
const auth = require('../../../middlewares/auth');
const isAdmin = require('../../../middlewares/isAdmin');

router.post("/", async (req, res, next) => {
    try {
        res.json(await AppointmentsController.newAppointment({
            userId: req.body.idUser,
            doctorId: req.body.idDoctor,
            date: req.body.date,
            appointment_date: req.body.appointment_date
        }))

    } catch (e) {
        res.status(500).json({ error: e.message })
        //next(e);
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


module.exports = router;