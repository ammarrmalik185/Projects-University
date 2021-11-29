const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/webLabMidDb")
module.exports = mongoose.model("Publisher", new mongoose.Schema({

    profile_picture: mongoose.Schema.Types.Buffer,
    name: String,
    area_of_publishing: String,

}))
