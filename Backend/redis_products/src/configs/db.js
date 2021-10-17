const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://pagin:pagin@cluster0.kt5qr.mongodb.net/redis_product?retryWrites=true&w=majority");
}