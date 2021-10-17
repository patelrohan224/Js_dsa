const mongoose=require('mongoose');

module.exports=()=>{
    return mongoose.connect("mongodb+srv://pagin:pagin@cluster0.kt5qr.mongodb.net/practice?retryWrites=true&w=majority")
}