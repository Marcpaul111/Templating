const express = require('express');
const app = express();
const path = require('path');

// path
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// homepage
app.get('/', (req, res) => {
    res.render('home');
})

// about page
app.get('/about', (req, res) => {
    res.render('about');
})

// contact page
app.get('/contact', (req, res) => {
    res.render('contact');
})

// 404 error
app.get('*', (req, res) => {
    res.render('notfound');
})


app.listen(3000, (req, res) => {
    console.log('Connected to localhost:3000');
})