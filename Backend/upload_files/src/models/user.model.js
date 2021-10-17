const mongoose=require('mongoose');
const userShema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    image_urls:{type:String,required:true}
})
module.exports=mongoose.model("user",userShema)