const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
    title: String,
    body: String,
    snippet: String
})
const blogModel = mongoose.model("Blog", blogSchema)
mongoose.connect("mongodb://localhost:27017/lab8db", (error => {if (error) throw error}))

module.exports = blogModel


