const express = require('express');
const router = express.Router();

// home page 
router.get('/', (req, res) => {
    res.render('index', { title:'Home' });
});

// add blog route 
router.get('/create', (req, res) => {
    res.render('add-blog', { title: 'Add Blog' })
});



module.exports = router;