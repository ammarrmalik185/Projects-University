const blogModel = require('../models/blogModel')
const mongoose = require("mongoose");

module.exports.blogPost = function (req, res, next) {
    console.log(req.body)
    new blogModel(req.body).save()
        .then(r => {if (r) console.log(r)})
    res.json("created")
}

module.exports.blogGet = function (req, res, next) {
    blogModel.find({}).exec((err, data) => {
        console.log(data);
        if (err) {
            res.status(500)
            console.log(err)
        }

        if (data) {
            res.status(200)
            res.json(data)
        }else{
            res.status(404)
        }
    })
}

module.exports.singleBlogGet = function (req, res, next) {
    blogModel.find({_id : new mongoose.Types.ObjectId(req.params.blogId)})
        .exec((err, data) => {
            console.log(data);
            if (err) {
                res.status(500)
                console.log(err)
            }

            if (data) {
                res.status(200)
                res.json(data)
            }else{
                res.status(404)
            }
    })
}

module.exports.singleBlogUpdate = function (req, res, next) {
    blogModel.findOneAndUpdate({_id : new mongoose.Types.ObjectId(req.params.blogId)}, req.body, {new: true})
        .exec((err, data, updatedData) => {
            console.log(data);
            if (err) {
                res.status(500)
                console.log(err)
            }
            res.json(data)
    })
}

module.exports.singleBlogDelete = function (req, res, next) {
    blogModel.findOneAndDelete({_id : new mongoose.Types.ObjectId(req.params.blogId)})
        .exec((err, data) => {
            console.log(data);
            if (err) {
                res.status(500)
                console.log(err)
            } else {
                res.status(200)
                res.json(null)
            }

        })
}
