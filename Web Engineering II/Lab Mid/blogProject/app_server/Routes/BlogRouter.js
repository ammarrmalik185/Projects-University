const express = require('express');
const router = express.Router();
const blogController = require("../controllers/blogController")

router.get('/', blogController.blogGet)
router.post('/', blogController.blogPost)
router.get('/:blogId', blogController.singleBlogGet)
router.put('/:blogId', blogController.singleBlogUpdate)
router.delete('/:blogId', blogController.singleBlogDelete)

module.exports = router
