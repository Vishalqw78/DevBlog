const User = require("../models/usersModel");

const router = require('exprress').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Register a new user
//// always use try/catch block to catch error
router.post('/register',async (req,res)=>{
    try{
        
    }
    catch(err){
        res.send(
            {
                success:false,
                message:err.message,
            }
        )
    }
})