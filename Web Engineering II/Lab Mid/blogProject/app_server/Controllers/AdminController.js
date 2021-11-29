const Blog = require("../Models/Blog")
const Publisher = require("../Models/Publisher")
const mongoose = require("mongoose");

module.exports.getAllBlogs = (req, res, next) => {
    Blog.find({}).exec((err, data) => {
        if (err) {
            next(err);
            throw err;
        }

        res.status(200).json(data);
    })
}

module.exports.getAllPublishers = (req, res, next) => {
    Publisher.find({}).exec((err, data) => {
        if (err) {
            next(err);
            throw err;
        }

        res.status(200).json(data);
    })
}

module.exports.getBlogsOfSinglePublisher = (req, res, next) => {
    Blog.find({publisher: req.params.publisherId}).exec((err, data) => {
        if (err) {
            next(err);
            throw err;
        }
        res.status(200).json(data);
    })
}
module.exports.getSingleBlogOfSinglePublisher = (req, res, next) => {
    Blog.findById(req.params.blogId).exec((err, data) => {
        if (err) {
            next(err);
            throw err;
        }
        if(data.publisher.toString() === req.params.publisherId)
            res.status(200).json(data);
        else
            res.status(404).json("Blog does not belong to this publisher")
    })
}
module.exports.approveSingleBlogOfSinglePublisher = (req, res, next) => {
    Blog.findByIdAndUpdate(Number.parseInt(req.params.blogId), {$set : {approved: true}}).exec((err, data) => {
        if (err) {
            next(err);
            throw err;
        }
        res.status(200).json("approved");
    })
}
module.exports.deletePublisher = (req, res, next) => {
    Publisher.findByIdAndDelete(req.params.publisherId).exec((err) => {
        if (err) {
            next(err);
            throw err;
        }
        res.status(200).json("deleted");
    })
}
