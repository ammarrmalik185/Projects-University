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
    guest: {
        required: true,
        ref: "Guest",
        type: mongoose.Schema.Types.ObjectId
    },
})

module.exports = mongoose.model("Reservation", schema)
