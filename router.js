const router = require('express').Router();

const UsersRouter = require('./src/Users/routers/routerUsers');

router.use("/user", UsersRouter);

//Exporto router
module.exports = router;