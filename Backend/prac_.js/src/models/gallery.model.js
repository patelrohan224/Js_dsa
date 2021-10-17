const mongoose=require('mongoose');
const galleryShema=new mongoose.Schema({
    title:{type: String, required: false},
    image_urls:[{type:String,required:true}],
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:"users",required:true}
},{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("gallery",galleryShema)