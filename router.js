const router = require('express').Router();

const UsersRouter = require('./src/Users/RouterUsers');
const DoctorsRouter = require('./src/doctor/RouterDoctors');
const routerAppointment = require('./src/appointment/RouterAppointment');

router.use("/user", UsersRouter);
router.use("/doctor", DoctorsRouter);
router.use("/appointment", routerAppointment);
//Exporto router
module.exports = router;