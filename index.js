require('dotenv').config()
const express=require('express');
const { PORT } = require('./config/config');
const app=express();
const cors = require('cors');
const dbconnect = require("./db/dbconnect");
const router = require('./router');
app.use(express.json());
app.use(cors());
app.use(router);
dbconnect();
//Configuro cors
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};
app.listen(PORT, () => console.log(`Node server running on http://localhost:${PORT}` ))