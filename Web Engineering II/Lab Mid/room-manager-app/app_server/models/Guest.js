const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/webMidDb")

const schema = new mongoose.Schema({
    name: String,
    telephone: String,
    address: String,
    country: String,
    identity: String
})

module.exports = mongoose.model("Guest", schema)
