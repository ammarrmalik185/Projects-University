const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Admin = mongoose.model('Admin', adminSchema)
mongoose.connect('mongodb://localhost:27017/GenshinHelper', (error => {if (error) throw error}))

module.exports = Admin