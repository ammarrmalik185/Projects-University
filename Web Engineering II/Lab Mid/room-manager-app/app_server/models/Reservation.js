const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/webMidDb")

const schema = new mongoose.Schema({

    checkInTime: Date,
    checkOutTime: Date,
    room: {
        required: true,
        ref: "Room",
        type: Number
    },
    customer: {
        required: true,
        ref: "Customer",
        type: mongoose.Schema.Types.ObjectId
    },
})

module.exports = mongoose.model("Reservation", schema)
