const express = require('express');

const router = express.Router();

const Post = require("../models/post.model")

const authenticate = require('../middlewares/authenticate')

router.get("/new", function(req, res) {
    return res.render("products/new")
})

router.get("/", authenticate, async function(req, res) {
    
    const user = req.user;
    delete user.password
    let posts
    try{
        posts= await Post.find({user:user._id}).lean().exec();
        if(!posts) return res.status(400).send({message: "User dnt have any post"}); 
    }
    catch(err){
      
         return res.status(500).send({message: "Sorry for inconvenience please try again later"});
    }
    res.send({posts, user})
})
router.post("/",async function(req, res) {
    const post = await Post.create(req.body)
    return res.send({post})
})

module.exports = router;