const mongoose = require("mongoose")

let blogSchema = new mongoose.Schema({
    blogId : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    postTime: {
        type: Date,
        default: Date.now()
    },
    blogRating: Number,
    comments: [{
        body: String,
        postDate: Date
    }]
});

let Blog = new mongoose.Model("blog", blogSchema);

mongoose.connect("mongodb://localhost:27017/web-assignment-lab-2", (err => {
    if (err) throw err;

    Blog.insertMany([
        {
            blogId : new mongoose.Types.ObjectId(1),
            title: "Title",
            author: "Ammar",
            body: "Test blog",
            postTime: Date.now(),
            blogRating: 3,
            comments: [{
                body: "comment body",
                postDate: Date.now()
            }]
        },
        {
            blogId : new mongoose.Types.ObjectId(2),
            title: "Title2",
            author: "Ammar",
            body: "Test blog 2",
            postTime: Date.now(),
            blogRating: 1,
            comments: [{
                body: "comment body 2",
                postDate: Date.now()
            }]
        }
    ])
    mongoose.connection.close()
}))
