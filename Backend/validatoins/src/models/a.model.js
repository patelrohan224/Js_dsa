const mongoose=require('mongoose')

const authSchema = new mongoose.Schema({
    user:{type:String,required:false},
   auth:{type:mongoose.Schema.Types.ObjectId, ref:"users",required:true}
})
const Auth=mongoose.model("auth",authSchema)
module.exports=Auth