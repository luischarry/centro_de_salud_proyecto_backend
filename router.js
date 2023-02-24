const router = require('express').Router();

const UsersRouter = require('./src/Users/routers/routerUsers');
const DoctorsRouter = require('./src/doctor/routers/routerDoctors');
const routerAppointment = require('./src/appointment/routers/routerAppointment');

router.use("/user", UsersRouter);
router.use("/doctor", DoctorsRouter);
router.use("/appointment", routerAppointment);
//Exporto router
module.exports = router;