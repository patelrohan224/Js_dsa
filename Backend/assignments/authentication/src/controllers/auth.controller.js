const jwt = require("jsonwebtoken");
require("dotenv").config();
const {body,validationResult} = require('express-validator');
const User = require("../models/user.model")

const newToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET_KEY);
}
function valid(){
    return [body("name").isLength({min:3}).withMessage("etleast 3 length is required"),
    body("email").isEmail().withMessage("please enter valid email"),
    body("password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]{8,}/,).withMessage('Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long')
];
}
function valid_2(){
    return [body("email").isLength({min:3}).withMessage("etleast 3 length is required"),
    body("password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]{8,}/,).withMessage('Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long')]
}
const register = async (req, res) => {

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

    let user;
    try {
        // First we check if user with same email already exists
        user = await User.findOne({email: req.body.email})

        // if yes then we throw an error that email already exists
        if (user) return res.status(400).send({message: "Please check your email and password"});
        
        // else we will create the user with the email and password 
        // but before saving the password we need to hash it
        user = await User.create(req.body);
        
        // we will create a token
        const token = newToken(user)
        
        // we will send the token to the frontend
        return res.status(200).send({user, token});

    } catch (err) {
        return res.status(500).send({message: "Sorry for inconvenience please try again later"});
    }
}

const login = async (req, res) => {
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

        // if not exists we throw an error
        if(! user) return res.status(400).send({message: "Please check your email and password"});
    
        // if it exists then we match the password
        let match = user.checkPassword(req.body.password);
    
        // if not match then we throw an error
        if(! match) return res.status(400).send({message: "Please check your email and password"});
    
        // we will create a token
        const token = newToken(user)
        
        // we will send the token to the frontend
        return res.status(200).send({user, token});

    } catch (err) {
        return res.status(500).send({message: "Sorry for inconvenience please try again later"});   
    }
}

module.exports = {register, login,valid,valid_2}