const express = require('express')
const app = require('./index')
const connect = require('./config/db');
const userController = require('./controllers/user.controller');
app.use(express.json())

app.use('/users',userController);

app.listen(2222, async function() {
    await connect();
    console.log("listening on 2222");
    })


