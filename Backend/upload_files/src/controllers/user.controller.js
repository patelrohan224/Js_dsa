const express=require('express');
const router=express.Router();
const upload=require('../middleware/file-upload')

const Product = require('../models/user.model')
const fs=require('fs');

router.get("/new",async function (req, res){
    res.render("add")
})

router.get("/single",async function(req,res){
    const product= await Product.find({}).lean().exec()
    return res.status(201).send(product)
})
router.post("/single",upload.single("userImages"),async function(req,res){
    const product = await Product.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        image_urls:req.file.path
    })
    return res.status(201).send(product)
})
router.patch("/single/:id",upload.single("userImages"),async function(req,res){
    const produt=await Product.findById({_id:req.params.id}).lean().exec()
    const pathToFile=produt.image_urls
    fs.unlink(pathToFile, function(err) {
        if (err) {
          throw err
        } else {
          console.log("Successfully deleted the file.")
        }
    })
    let _id=req.params.id
    const product = await Product.findByIdAndUpdate(_id,{
        image_urls:req.file.path
    },{
        new:true
    })
    return res.status(201).send(product)
})
router.delete("/single/:id",async function(req,res){
    const produt=await Product.findById({_id:req.params.id}).lean().exec()
    const pathToFile=produt.image_urls
    fs.unlink(pathToFile, function(err) {
        if (err) {
          throw err
        } else {
          console.log("Successfully deleted the file.")
        }
    })
    const product = await Product.findByIdAndDelete({
        _id:req.params.id
    })
    return res.status(201).send("delete succesfully")
})

module.exports=router