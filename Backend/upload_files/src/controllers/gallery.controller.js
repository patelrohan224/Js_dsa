const express=require('express');
const router=express.Router();
const upload_gallery=require('../middleware/file-upload_gallery')
const fs=require('fs');
const Gallery = require('../models/gallery.model')


router.post("/multiple",upload_gallery.array("galleryImages",5),async function(req,res){
    const filePaths=req.files.map(file => file.path)
    try{
    const gallery = await Gallery.create({
         image_urls:filePaths,
         user_id:req.body.id
    })
    return res.status(201).send(gallery)}
    catch(err)
    {
        return res.send(err) 
    }
})

router.get("/multiple",async function(req,res){
    const gallery= await Gallery.find({}).lean().exec()
    return res.status(201).send(gallery)
})

router.delete("/multiple/:id",async function(req,res){
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