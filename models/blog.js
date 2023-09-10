const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const blogSchema = {
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
};

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;