const Blog = require("../Models/Blog");
const Publisher = require("../Models/Publisher");

module.exports.registerPublisher = (req, res, next) => {
    Publisher.create(req.body).then(()=>{
        res.status(200).json("created");
    }).catch(err => {
        next(err);
        throw err;
    })
}
module.exports.postSingleBlog = (req, res, next) => {
    Blog.create(req.body).then(()=>{
        res.status(200).json("created");
    }).catch(err => {
        next(err);
        throw err;
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
        res.status(200).json(data);
    })
}
module.exports.updateSingleBlog = (req, res, next) => {
    Blog.findByIdAndUpdate(req.params.blogId, {$set : req.body}, {new: true}).exec((err, data) => {
        if (err) {
            next(err);
            throw err;
        }
        res.status(200).json(data);
    })
}
module.exports.deleteSingleBlog = (req, res, next) => {
    Blog.findByIdAndDelete(req.params.blogId).exec((err) => {
        if (err) {
            next(err);
            throw err;
        }
        res.status(200).json("deleted");
    })
}
