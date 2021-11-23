const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/webMidDb")


const schema = new mongoose.Schema({
  // _id is room number
  _id: Number,
  type: String,
  charges: Number,
  facilities: [String],
})

module.exports = mongoose.model("Room", schema)
