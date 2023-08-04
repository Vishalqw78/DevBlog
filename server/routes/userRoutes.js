const User = require("../models/usersModel");
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const authMiddleware = require('../middleware/authMiddleware.ts');
const jwt = require('jsonwebtoken');


//Register a new user
//// always use try/catch block to catch error
router.post('/register', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.send({
          success: false,
          message: "User already exists",
        });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      
      // Create a new user object with hashed password
      const newUser = new User({
        name : req.body.name,
        email: req.body.email,
        password: hashPassword,
        // Add other properties as needed
      });
  
      // Save the new user to the database
      await newUser.save();
  
      res.send({
        success: true,
        message: "User created Successfully , Please Login to continue",
      });
    } catch (err) {
      res.send({
        success: false,
        message: err.message,
      });
    }
  });
  

router.post('/login',async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.send({
                success: false,
                message: "User does not Exist",
            })
        }
        const validPass = await bcrypt.compare(req.body.password,user.password);
        if(!validPass){
            return res.send({
                success: false,
                message: "Invalid Password",
            })
        }
        
        const token = jwt.sign({
            userId : user._id,
        },
        process.env.jWt_secret,
        {
            expiresIn: "1d",
        });

        //send to client now


        res.send({
            success: true,
            message: "USer Logged In Successfully",
            data:token,
        })
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

router.get("/getuser", authMiddleware , async (req, res ) => {
  try {
    const user = await User.findById(req.body.userId);
    res.send({
      success: true,
      message: "User details fetched successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;