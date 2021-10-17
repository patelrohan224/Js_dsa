const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://pagin:pagin@cluster0.kt5qr.mongodb.net/authoraizaation_google_auth?retryWrites=true&w=majority")
}