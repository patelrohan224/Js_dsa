const mongoose=require('mongoose')
const connect=()=>{
    return mongoose.connect("mongodb+srv://pagin:pagin@cluster0.kt5qr.mongodb.net/validation?retryWrites=true&w=majority")
}
module.exports =connect