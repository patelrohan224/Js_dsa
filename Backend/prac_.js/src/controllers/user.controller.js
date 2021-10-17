const express=require('express')
const jwt = require("jsonwebtoken");
require("dotenv").config();
const router=express.Router();
const User=require("../models/user.model")
const {signup_valid,login_valid,validationResult}= require("../middleware/validation.me")
const path = require('path')
const  sendMail  = require('../utils/sendMail');
const upload=require('../middleware/file-upload')
const fs=require('fs');
const newToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET_KEY);
}

router.post("/signup",upload.single("userprofile"),signup_valid(),async (req,res)=>{
    
    const errors = validationResult(req);
    let finalErrors = null;
    if (!errors.isEmpty()) {
        finalErrors = errors.array().map(error => {
            return {
                param: error.param,
                msg: error.msg,
            }
        })
        const pathToFile=req.file.path
    fs.unlink(pathToFile, function(err) {
        if (err) {
          throw err
        } else {
        
        }
    })
      return res.status(400).json({ errors:finalErrors });
   }
   let user;
   try {

       user = await User.findOne({email: req.body.email})
       if (user) return res.status(400).send({message: "Please check your email and password"});
     
       user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role,
        profile:req.file.path
     });
     
       const token = newToken(user)
    
                sendMail({
                    from:"anyms@gamo.com",
                    to:req.body.email,
                    subject:`Welcome to ABC system ${req.body.name}`,
                    text:`Hi ${req.body.name}, Please confirm your email address`,
                    html:path.join(__dirname,"../files/name.html"),
                      path:path.join(__dirname,"../files/name.txt")
                });
                sendMail({
                    from:"anyms@gamo.com",
                    to:req.body.email,
                    subject:`Welcome to ABC system ${req.body.name}`,
                    text:`Hi ${req.body.name}, Please confirm your email address`,
                    html:path.join(__dirname,"../files/name.html"),
                path:path.join(__dirname,"../files/name.txt")
                });
                sendMail({
                    from:"anyms@gamo.com",
                    to:req.body.email,
                    subject:`Welcome to ABC system ${req.body.name}`,
                    text:`Hi ${req.body.name}, Please confirm your email address`,
                    html:path.join(__dirname,"../files/name.html"),
                path:path.join(__dirname,"../files/name.txt")
                });

                return res.status(200).send({user, token});

   } catch (err) {
       return res.status(500).send({message: "Sorry for inconvenience please try again later"});
   }
})

router.get("/login",login_valid(),async (req,res)=>{

    const errors = validationResult(req);
    let finalErrors = null;
    if (!errors.isEmpty()) {
        finalErrors = errors.array().map(error => {
            return {
                param: error.param,
                msg: error.msg,
            }
        })
      return res.status(400).json({ errors:finalErrors });
   }
    try {

        let user = await User.findOne({email: req.body.email});
        if(! user) return res.status(400).send({message: "Please check your email and password"});
        let match = user.checkPassword(req.body.password);
        if(! match) return res.status(400).send({message: "Please check your email and password"});
        const token = newToken(user)
        return res.status(200).send({user, token});

    } catch (err) {
        return res.status(500).send({message: "Sorry for inconvenience please try again later"});   
    }
})

module.exports=router