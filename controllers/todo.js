
var TodoModel = require('../models/todo')

exports.getAll = function(request, response) {
  TodoModel.find({}, function(err, todos) { // Model

    if (err) return console.log(err);
    
    response.render('index', {
        todos: todos
    })
  })
}

exports.getById = function(req, res) {
  TodoModel.findById(req.params.id, (err, todo) => {
    if(err) return console.log(err)

    if(!todo) res.redirect('/')
    
    res.render('update', {
        todo: todo
    })
  })
}

exports.create = function(req, res) {
  TodoModel.create({
    title: req.body.title,
    description: req.body.description
  }, function (err) {
    if (err) return console.log(err)
    res.redirect('/')
  })
}

exports.update = function(req, res) {
  TodoModel.updateOne({
      _id: req.params.id
  },
  req.body,
  function(err) {
      if(err) return console.log(err)
      res.redirect('/')
  })
}

exports.delete = function(req, res) {
  TodoModel.findOneAndDelete({
    _id: req.params.id
  }, (err) => {
    if(err) return console.log(err)

    res.redirect('/')
  })
}