const express = require('express');
const bodyParser= require('body-parser') 
const app = express();
const router = express.Router()

app.use(bodyParser.urlencoded({extended: true}))

const mongoose = require('mongoose');

const todoController = require('./controllers/todo')

// Mongo

mongoose.connect('mongodb://127.0.0.1:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true})
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('view engine', 'ejs')

router.get('/', todoController.getAll)

app.get('/todo/:id', (req, res) => {
    TodoModel.findById(req.params.id, (err, todo) => {
        if(err) return console.log(err)

        if(!todo) res.redirect('/')
        
        res.render('update', {
            todo: todo
        })
    })
})

app.post('/todo', (request, response) => {

    TodoModel.create({
       title: request.body.title,
       description: request.body.description,
       age: 1
    }, function (err) {
        if (err) return console.log(err)
        response.redirect('/')
    })
})

app.post('/todo/update/:id', (req, res) => {

    TodoModel.updateOne({
        _id: req.params.id
    },
    req.body,
    function(err) {
        if(err) return console.log(err)
        res.redirect('/')
    })
})

app.get('/todo/delete/:id', (req, res) => {

    TodoModel.findOneAndDelete({
        _id: req.params.id
    }, (err) => {
        if(err) return console.log(err)

        res.redirect('/')
    })
})

app.listen(3000, function() {
    console.log('listening on 3000')
})