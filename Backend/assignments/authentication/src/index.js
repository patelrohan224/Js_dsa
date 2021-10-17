const express = require('express');
const {check,validationResult,body} = require('express-validator');

const postcontroller = require("./controllers/post.controller")
const {register,valid,login,valid_2}=require("./controllers/auth.controller")

const app = express();

app.use(express.json());

app.use("/register",valid(),register);
app.use("/login", valid_2(),login);
app.use("/posts", postcontroller)

module.exports = app;
