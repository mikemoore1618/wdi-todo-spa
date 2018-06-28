const Todo = require('../models/Todo.js')

module.exports = {
    //retrieve all todos
    index: (req, res) => {
      Todo.find({}, (err, allTodos) => {
        if(err) throw err;
        res.json(allTodos)
      })  
    },

    // show a to do
    show: (req, res) => {
      let id = req.params.id
        Todo.findById(id, (err, showTodo) => {
          if(err) throw err;
          res.json({ success: true, message: "Todo found", todo: showTodo })
        })
      },

    // create a new book
    create: (req, res) => {
     Todo.create(req.body, (err, savedTodo) => {
      if(err) throw err;
      res.json({ success: true, message: "Todo created.", todo: savedTodo })
        })
    },

    //update a todo(toggle)
    //for patch request we dont need to supply request body because we want app to know what we want to change it to-true or false(toggle)
    
    update: (req,res) => {
      let id = req.params.id
      Todo.findById(id, (err, todoItem) => {
        if(err) throw err;
        todoItem.completed = !todoItem.completed
        todoItem.save((err, savedTodo) => {
          if(err) throw err;
          res.json({ success: true, message: "Todo Updated", toDo: savedTodo})
        })
      })
  },

    // delete a todo
    destroy: (req, res) => {
        let id = req.params.id
        Todo.findByIdAndRemove(id, (err, deletedTodo) => {
          if(err) throw err;
          res.json({ success: true, message: "Todo deleted." })
        })
    }
}