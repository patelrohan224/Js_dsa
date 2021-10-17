const express=require('express')
const bodyParser = require('body-parser');
const app= express()
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const Usercontroller=require("./controllers/user.controller")
const galleryController = require('./controllers/gallery.controller');

app.use('/gallerys',galleryController);
app.use("/users",Usercontroller)
module.exports =app