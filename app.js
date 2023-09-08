const express = require('express'); 
const app = express();

app.get('/', (req, res) => {
    res.send('test');
})

app.get('/blogs', () => {
    res.send("test Blogs");
})

// listening to requests
app.listen(5000, () => {
    console.log('Server is Listening for Requests at Port 5000');
});