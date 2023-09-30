const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

// Create & store express app
const app = express();

// Connect to mongodb
const dbURI = 'mongodb+srv://fjean0522:<passWord>@ninjablog.upg3eap.mongodb.net/<clusterName>?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then((results) => app.listen(3000))
    .catch((err) => console.log(err));


// Register view engine
app.set('view engine', 'ejs');


// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


// Routes
