const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
// create blog router
const blogRoute = require('./routes/blogRoute');

let PORT = 5001;

// connect the database

const connectionString = 'mongodb+srv://tayeb:12345@cluster0.uqqumzp.mongodb.net/blogsDb';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> {
        console.log('Connected Successfully to Database');
        // listening to requests
        app.listen(5001, () => {
            console.log(`Server is Listening for Requests at Port ${PORT}`);
        });
    })
    .catch( (err) => {
        console.log(err)
    } )

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the static files 
app.use(express.static('public'));

// url encoded (body parser)
app.use(express.urlencoded({ extended: true }));

// Home Page
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

// About Page
app.get('/about', (req, res) => {
    res.render('about', { title:'About' });
});

// blog routes
app.use('/blogs', blogRoute);

// 404 page
app.use((req, res) => {
    res.status(404).render('./views/404.ejs'), { title:'404'}
});  