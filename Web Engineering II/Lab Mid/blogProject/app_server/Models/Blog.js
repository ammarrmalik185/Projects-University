const mongoose = require("mongoose")

module.exports = mongoose.model("Blog", new mongoose.Schema({

    title: String,
    snippet: String,
    body: String,
    comments: [String],
    ratings: [Number],
    approved: {
        type: Boolean,
        default: false
    },
    publisher: {
        ref: "Publisher",
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

}))
