const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find()
        .then( (result)=> {
            res.render('index', { title:'Home' , blogs: result});
        } )
        .catch( (err)=> {
            console.log(err);
            res.render('404', { tilte: "Blog Not Found" });
        } );
}

const add_blog_page = (req, res) => {
    const blog = {
        title: req.body
    }
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

const save_blog = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then( ()=> {
            res.redirect('/blogs')
        } )
        .catch( (err)=> {
            console.log(err);
        } );

}

const delete_blog = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then( () => {
            res.redirect('/blogs');
        })
        .catch( (err) => console.log(err) );
}

module.exports = {blog_index, add_blog_page , blog_details, save_blog, delete_blog}