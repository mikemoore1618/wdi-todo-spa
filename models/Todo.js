// the Todo schema should contain the following fields:
// 1. body, which is a string
// 2. completed, which is a boolean that defaults to false
// in addition: the todo schema should also store timestamps for createdAt and updatedAt

const 
    mongoose = require('mongoose'),
    todoSchema = new mongoose.Schema({
        body: String,
        completed: { type: Boolean, default: false }
    }, {timestamps: true});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

