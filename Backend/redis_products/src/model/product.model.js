const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{type:String, required:true},
    size:{type:String, required:true},
    qty:{type:Number, required:true},
    price:{type:Number, required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("product", productSchema) 