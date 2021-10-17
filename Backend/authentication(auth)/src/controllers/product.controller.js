const express = require('express');

const router = express.Router();

const Product = require("../models/product.model")

const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize');

router.get("/new", function(req, res) {
    return res.render("products/new")
})

router.get("/", authenticate, authorize(["seller", "admin"]), async function(req, res) {
   
    const user = req.user
    delete user.password
    let products
    try{
        products  = await Product.find({seller:user._id}).lean().exec();
        if(products.length==0) return res.status(400).send({message: "User dnt have any products"}); 
    }
    catch(err){
         return res.status(500).send({message: "Sorry for inconvenience please try again later"});
    }
    return res.send({products, user})
})

router.post("/newpost",async(req, res)=>{
    const post = await Product.create(req.body);

    return res.status(201).send({post});
})

router.patch("/:productname", authenticate, authorize(["seller", "admin"]), async function(req, res) {
    
    const user = req.user;
    let prodct= await Product.findOne({"seller":user._id,"title":req.params.productname}).lean().exec();

    let product= await Product.findByIdAndUpdate(prodct._id,req.body,{new:true}).lean().exec();
    delete user.password
    return res.send({product, user})
})
router.delete("/:productname", authenticate, authorize(["seller", "admin"]), async function(req, res) {
    
    const user = req.user;
    let prodct= await Product.findOne({"seller":user._id,"title":req.params.productname}).lean().exec();

    let product= await Product.findByIdAndDelete(prodct._id).lean().exec();
    delete user.password
    return res.send(`${req.params.productname} product is deleted successfully`)
})

module.exports = router;