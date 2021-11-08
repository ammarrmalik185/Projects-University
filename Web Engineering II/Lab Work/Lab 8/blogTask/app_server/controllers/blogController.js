const blogModel = require('../models/blogModel')

module.exports.createNewBlogGet = function (req, res, next) {
    res.render('createBlog', {title: "Create Blog"})
}

module.exports.createNewBlogPost = function (req, res, next) {
    console.log(req.body)
    new blogModel(req.body).save()
    res.render('createBlog' , {title: "Create Blog"})
}

module.exports.main = function (req, res, next) {
    blogModel.find({}).exec((err, data) => {
        if (err) throw err
        console.log(data)
        res.render('blog', {title: "View Blog", data: data})

    })


}
