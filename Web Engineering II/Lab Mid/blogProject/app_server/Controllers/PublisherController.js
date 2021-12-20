const Blog = require("../Models/Blog");
const Publisher = require("../Models/Publisher");

module.exports.registerPublisher = (req, res, next) => {
    Publisher.create(req.body).then(()=>{
        res.status(200).json("created");
    }).catch(err => {
        next(err);
        throw err;
    })

    var body = '';
    var qs = require('querystring');
    req.on('data', function (data) {
        body += data;

        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6)
            req.connection.destroy();
    });

    req.on('end', function () {

        var post = qs.parse(body);
        console.log(post)
    });
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
