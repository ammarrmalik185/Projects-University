const mongoose = require("mongoose")

let blogSchema = new mongoose.Schema({
    _id : {
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
    blogRating: {
        Votes: Number,
        Favorites: Number
    },
    comments: [{
        body: String,
        postDate: Date
    }]
});

let Blog = new mongoose.model("blog", blogSchema);

mongoose.connect("mongodb://localhost:27017/web-assignment-lab-2", (err => {
    if (err) throw err;

    let close = err => {
        if (err) throw err
        mongoose.connection.close()
    }

    Blog.insertMany([
        {
            _id : new mongoose.Types.ObjectId(3),
            title: "Title",
            author: "Ammar",
            body: "Test blog",
            postTime: Date.now(),
            blogRating: {
                Votes: 3,
                Favorites: 4
            },
            comments: [{
                body: "comment body",
                postDate: Date.now()
            }]
        },
        {
            _id : new mongoose.Types.ObjectId(4),
            title: "Title2",
            author: "Ammar",
            body: "Test blog 2",
            postTime: Date.now(),
            blogRating: {
                Votes: 3,
                Favorites: 4
            },
            comments: [{
                body: "comment body 2",
                postDate: Date.now()
            }]
        }
    ],  err => {if (err) throw err})

    Blog.find().exec((err, data) => console.log(data))
    Blog.findOne().exec((err, data) => console.log(data))
    Blog.findById(1).exec((err, data) => console.log(data))

    Blog.updateOne({_id: new mongoose.Types.ObjectId(1)}, {title: "Test 3"}).exec(err => {if (err) throw err})
    Blog.updateMany({blogRating: {Votes: 3, Favorites: 4}}, {blogRating: {Votes: 4}}).exec(err => {if (err) throw err})
    Blog.findOneAndUpdate({}, {title: "Test 4"}).exec(err => {if (err) throw err})
    Blog.findByIdAndUpdate(new mongoose.Types.ObjectId(1), {body: "Ok"}).exec(err => {if (err) throw err})

    Blog.replaceOne({_id: new mongoose.Types.ObjectId(1)}, {
        _id: new mongoose.Types.ObjectId(1),
        title: "Title5",
        author: "Ammar",
        body: "Test blog 5",
        postTime: Date.now(),
        blogRating: {
            Votes: 5,
            Favorites: 6
        },
        comments: [{
            body: "comment body 5",
            postDate: Date.now()
        }]
    }).exec(err => {if (err) throw err})
    Blog.findOneAndReplace({_id: new mongoose.Types.ObjectId("00000003ef56d0a206829617")}, {
        _id: new mongoose.Types.ObjectId("00000003ef56d0a206829617"),
        title: "Title5",
        author: "Ammar",
        body: "Test blog 5",
        postTime: Date.now(),
        blogRating: {
            Votes: 5,
            Favorites: 7
        },
        comments: [{
            body: "comment body 5",
            postDate: Date.now()
        }]
    }).exec(err => {if (err) throw err})

    Blog.deleteOne({_id:new mongoose.Types.ObjectId(1)}).exec(err => {if (err) throw err})
    Blog.deleteMany({title: "Title 1"}).find().exec(err => {if (err) throw err})
    Blog.findOneAndDelete({_id:new mongoose.Types.ObjectId(2)}).exec(err => {if (err) throw err})
    Blog.findByIdAndDelete(new mongoose.Types.ObjectId(3)).exec(err => {if (err) throw err})

    Blog.findOneAndRemove({}).exec(err => {if (err) throw err})
    Blog.findByIdAndRemove(new mongoose.Types.ObjectId(4)).exec(err => {if (err) throw err})

    Blog.find().exec((err, data) => {
        console.log(data)
        setTimeout(() => close(err), 3000)
    })

}))
