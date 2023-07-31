require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
mongoose.set("strictQuery",true)
const dbconfig = require('./config/dbConfig') 
const app = express();

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});