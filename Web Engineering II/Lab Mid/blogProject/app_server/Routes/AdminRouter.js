const express = require("express");
const adminController = require("../Controllers/AdminController")

const r = express.Router();

r.get("/blog", adminController.getAllBlogs)
r.get("/publisher", adminController.getAllPublishers)
r.delete("/publisher/:publisherId", adminController.deletePublisher)
r.get("/publisher/:publisherId/blogs",  adminController.getBlogsOfSinglePublisher)
r.get("/publisher/:publisherId/blogs/:blogId",  adminController.getSingleBlogOfSinglePublisher)
r.put("/publisher/:publisherId/blogs/:blogId/approve", adminController.approveSingleBlogOfSinglePublisher)

module.exports = r;
