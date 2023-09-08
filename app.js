const express = require('express'); 
const app = express();
// create blog router
const blogRoute = require('./routes/blogRoute');


// set the view engine to ejs
app.set('view engine', 'ejs');

// set the static files 
app.use(express.static('public'));

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
})


// listening to requests
app.listen(5000, () => {
    console.log('Server is Listening for Requests at Port 5000');
});