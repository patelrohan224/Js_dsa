const express=require('express');
const router=express.Router();
const upload_gallery=require('../middleware/file-upload_gallery')
const fs=require('fs');
const Gallery = require('../models/gallery.model')
const authenticate = require('../middleware/authenticate')
const authorize = require('../middleware/authorize');

router.post("/", authenticate ,upload_gallery.array("galleryImages",3),async function(req,res){
  let user = req.user
    const filePaths=req.files.map(file => file.path)
    try{
    const gallery = await Gallery.create({
      title: req.body.title,
         image_urls:filePaths,
         user_id:user._id
    })
    return res.status(201).send(gallery)}
    catch(err)
    {
        return res.send(err) 
    }
})

router.get("/", authenticate, authorize(["seller", "admin"]), async function(req, res) {
   
  const user = req.user
  delete user.password
  let products
  try{
  
      // products  = await Gallery.findOne({user_id:user._id}).lean().exec();
      products  = await Gallery.find({}).lean().exec();
      if(products.length==0) return res.status(400).send({message: "User dnt have any products"}); 
  }
  catch(err){
       return res.status(500).send({message: "Sorry for inconvenience please try again later"});
  }
  return res.send({products, user})
})

router.delete("/:id",async function(req,res){
    const galler=await Gallery.findById({_id:req.params.id}).lean().exec()
  for (let i = 0; i < galler.image_urls.length; i++) {
    fs.unlink(galler.image_urls[i], function(err) {
        if (err) {
          throw err
        } else {
        }
    })
  }
    const gallery= await Gallery.findByIdAndDelete({_id:req.params.id})
    return res.status(201).send(gallery)
})

module.exports=router