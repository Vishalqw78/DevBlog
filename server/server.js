require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose');
mongoose.set("strictQuery",true)
const dbconfig = require('./config/dbConfig') 
const userRoute = require("./routes/userRoutes")
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => res.send('Server running'));
app.use('/api/users',userRoute);
const port = process.env.PORT||5000;
const path = require("path");
__dirname = path.resolve();
// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});