const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    user:{type:mongoose.Schema.Types.ObjectId, ref:"users",required:true}
})

Post= mongoose.model("post", postSchema); // products
module.exports =Post