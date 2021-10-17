const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    image_urls: [{type: String, required: false}],
    seller:{type:mongoose.Schema.Types.ObjectId,ref:"users",required:true}
})

module.exports = mongoose.model("product", productSchema); // products