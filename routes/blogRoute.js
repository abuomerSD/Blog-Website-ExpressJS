const express = require('express');
const router = express.Router();
const controller = require('../controllers/blogController');

// home page 
router.get('/', controller.blog_index);

// add blog route 
router.get('/create', controller.add_blog_page);

// blog details route
router.get('/:id', controller.blog_details);

// add blog POST method

router.post('/', controller.save_blog)


module.exports = router;