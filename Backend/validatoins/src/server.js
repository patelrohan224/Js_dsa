const express = require('express');
const app=express()
app.use(express.json())
const connect = require('./configs/db')
const usercontroller=require('./contollers/user.controller')
app.use("/users",usercontroller)
const start =async()=>{
    await connect()
    app.listen(2244,()=>{
        console.log("port 2244");
    })
}
module.exports=start