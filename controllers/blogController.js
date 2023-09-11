const Blog = require('../models/blog');

const blog_index = (req, res) => {
    res.render('index', { title:'Home' });
}

const add_blog = (req, res) => {
    res.render('add-blog', { title: 'Add Blog' });
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('blog-details',{ title:"Blog Details" , blog: result});
        })
        .catch(err => {
            console.log(err);
            res.render('404', { tilte: "Blog Not Found" })
        });
}

module.exports = {blog_index, add_blog , blog_details}