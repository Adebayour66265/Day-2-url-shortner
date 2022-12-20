const express = require('express');
const path = require('path');
const homeRoute = require('./routes/home');
const shortUrl = require('./routes/url');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));


app.use('/', homeRoute);
app.use('/url', shortUrl);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is Listing to PORT = ${PORT}`);
})