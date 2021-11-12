const blogModel = require('../models/blogModel')
const mongoose = require("mongoose");

// display blogs
module.exports.displayAllBlogs = function (req, res, next) {
    blogModel.find({}).exec((err, data) => {
        if (err) throw err
        res.render('viewBlog', {title: "View Blog", data: data})
    })
}
module.exports.viewSingleBlog = function (req, res, next) {
    blogModel.findById(new mongoose.Types.ObjectId(req.params.blogId)).exec((err, data) => {
        res.render('singleBlog', {title: "View Single Blog", data : data})
    })
}

// create blogs
module.exports.createNewBlogGet = function (req, res, next) {
    console.log("rendering create blog page")
    res.render('createBlog', {})
}
module.exports.createNewBlogPost = function (req, res, next) {
    new blogModel(req.body).save()
    res.redirect("/blog")
}

// edit blogs
module.exports.editSingleBlogGet = function (req, res, next) {
    blogModel.findById(new mongoose.Types.ObjectId(req.params.blogId)).exec((err, data) => {
        res.render('editBlog', {title: "Edit Blog", data})
    })
}
module.exports.editSingleBlogPost = function (req, res, next) {
    blogModel.findOneAndUpdate({_id : new mongoose.Types.ObjectId(req.params.blogId)}, {"$set": req.body})
        .exec((err, data, updatedData) => {
            if (err) throw err
            res.redirect("/blog")
        })
}

// delete blogs
module.exports.deleteSingleBlog = function (req, res, next) {
    blogModel.findOneAndDelete({_id : new mongoose.Types.ObjectId(req.params.blogId)})
        .exec((err, data) => {
            if (err) throw err;
            res.redirect("/blog")
        })

}

