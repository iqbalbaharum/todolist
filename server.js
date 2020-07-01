const express = require('express');
const bodyParser= require('body-parser') 
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

const mongoose = require('mongoose');

const todoRoute = require('./routes/todo')
// Mongo

mongoose.connect('mongodb://127.0.0.1:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')
app.use('/', todoRoute)

app.listen(3000, function() {
    console.log('listening on 3000')
})