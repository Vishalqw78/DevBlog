require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose');
mongoose.set("strictQuery",true)
const dbconfig = require('./config/dbConfig') 
const userRoute = require("./routes/userRoutes")
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('Server running'));
app.use('/api/users',userRoute);
const port = process.env.PORT||5000;

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});