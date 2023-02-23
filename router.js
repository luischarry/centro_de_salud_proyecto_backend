const router = require('express').Router();

const UsersRouter = require('./src/Users/routers/routerUsers');
const DoctorsRouter = require('./src/doctor/routers/routerDoctors');

router.use("/user", UsersRouter);
router.use("/doctor", DoctorsRouter);
//Exporto router
module.exports = router;