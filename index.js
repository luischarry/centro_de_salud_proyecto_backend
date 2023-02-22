require('dotenv').config()
const express=require('express');
const { PORT } = require('./config/config');
const app=express();
const dbconnect = require("./db/dbconnect");
const router = require('./router');
app.use(express.json());
app.use(router);
dbconnect();
app.listen(PORT, () => console.log(`Node server running on http://localhost:${PORT}` ))