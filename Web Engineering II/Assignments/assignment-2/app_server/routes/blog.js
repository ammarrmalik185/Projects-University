const express = require('express');
const router = express.Router();
const blogController = require("../controllers/blogController")

router.get('/', blogController.displayAllBlogs)
router.get('/display', blogController.displayAllBlogs)

router.get('/create', blogController.createNewBlogGet)
router.post('/create', blogController.createNewBlogPost)

router.get("/:blogId", blogController.viewSingleBlog)
router.get("/:blogId/edit", blogController.editSingleBlogGet)
router.post("/:blogId/edit", blogController.editSingleBlogPost)

router.get("/:blogId/delete", blogController.deleteSingleBlog)

module.exports = router
