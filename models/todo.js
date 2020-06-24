var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    // Short form
    title: String,
    // structure form
    description: { 
        type: String,
        default: 'this is a default value'
    }
})

module.exports = mongoose.model('todo', TodoSchema);