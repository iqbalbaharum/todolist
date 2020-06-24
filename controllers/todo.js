
var TodoModel = require('../models/todo')

exports.getAll = function(request, response) {
    TodoModel.find({}, function(err, todos) { // Model

        if (err) return console.log(err);
        
        response.render('index', {
            todos: todos
        })
    })
}