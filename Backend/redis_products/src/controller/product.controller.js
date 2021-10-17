const express = require("express");
const router = express.Router();
const Product = require("../model/product.model");
const redis = require("../configs/redis")
router.post("", async(req, res)=>{
    
    const product_key = await Product.create(req.body);

    redis.set(`product.${product_key._id}`, JSON.stringify(product_key));

    const product = await Product.find().lean().exec();

    redis.set("product", JSON.stringify(product));

    return res.status(201).send({db:product_key});
})

router.get("/:id", (req, res) =>{

    redis.get(`product.${req.params.id}`, async function (err, product){
        if(err) {console.log(err)};

        if(product) return res.status(201).send({product_redis: JSON.parse(product)})

        const product_key = await Product.findById(req.params.id).lean().exec();

        redis.set(`product.${req.params.id}`, JSON.stringify(product_key));

        return res.status(200).send({products_db: product_key});
    })
})
router.patch("/:id", async(req, res)=>{

    const product_key = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})

    redis.set(`product.${req.params.id}`, JSON.stringify(product_key));

    redis.get(`product.${req.params.id}`, async function (err, product){
        if(err) {console.log(err)};

        if(product) return res.status(201).send({product_redis: JSON.parse(product)})
    })

    const product = await Product.find().lean().exec();

    redis.set("product", JSON.stringify(product));

    return res.status(201).send({db:product_key});
})

router.delete("/:id", async(req, res)=>{

    const product_key = await Product.findByIdAndDelete(req.params.id)

    redis.del(`product.${req.params.id}`);

    const product = await Product.find().lean().exec();

    redis.set("product", JSON.stringify(product));

    return res.status(200).send(product_key);
})


router.delete("/Delete/all", async(req, res)=>{


    const product = await Product.deleteMany().lean().exec();

    redis.set("product", JSON.stringify(product));
   
    redis.flushdb()
    return res.status(200).send({db:"all deleted"});
})

router.get("", (req, res) =>{
      
    const page = +req.query.page || 1;
    const size = +req.query.size || 3;

    redis.get(`product.${page}.${size}`, async function (err, products){
        if(err) {console.log(err)};

        if(products) return res.status(201).send({products_redis: JSON.parse(products)})

        const offset = (page -1) * size

        const product = await Product.find().skip(offset).limit(size).lean().exec();
        const totalProductCount = await Product.find().countDocuments();

        const totalPages = Math.ceil(totalProductCount / size);

        redis.set(`product.${page}.${size}`, JSON.stringify(product));

        return res.status(200).send({products_db: product, pages:totalPages});

    })
})

router.get("/all/prod", (req, res) =>{ 

    redis.get("product", async function (err, products){
        if(err) {console.log(err)};

        if(products) return res.status(201).send({products_redis: JSON.parse(products)})

        const product = await Product.find().lean().exec();

        redis.set("product", JSON.stringify(product));

        return res.status(200).send({products_db: product});

    })

})


module.exports = router