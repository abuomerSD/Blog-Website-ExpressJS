const express = require('express');
const router = express.Router();
const controller = require('../controllers/blogController');

// home page 
router.get('/', controller.blog_index);

// add blog route 
router.get('/create', controller.add_blog);

// blog details route
router.get('/:id', controller.blog_details);


module.exports = router;