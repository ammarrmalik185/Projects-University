const express = require("express");
const publisherController = require("../Controllers/PublisherController")

const r = express.Router()

r.post("/register", publisherController.registerPublisher)
r.post("/blog", publisherController.postSingleBlog)
r.get("/blog/:publisherId", publisherController.getBlogsOfSinglePublisher)
r.get("/blog/:publisherId/:blogId", publisherController.getSingleBlogOfSinglePublisher)
r.put("/blog/:blogId", publisherController.updateSingleBlog)
r.delete("/blog/:blogId", publisherController.deleteSingleBlog)

module.exports = r;
