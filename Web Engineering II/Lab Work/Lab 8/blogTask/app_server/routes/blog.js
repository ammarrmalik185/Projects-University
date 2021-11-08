const express = require('express');
const router = express.Router();
const blogController = require("../controllers/blogController")

router.get('/', blogController.main)
router.get('/create', blogController.createNewBlogGet)
router.post('/create', blogController.createNewBlogPost)

module.exports = router
