require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log("Connection is successful")
});

connection.on('error',(err)=>{
    console.log("Connection is Unsuccessful")
});

module.exports = connection;