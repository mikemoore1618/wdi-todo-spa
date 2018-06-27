const
    express = require('express'),
    todosRouter = new express.Router(),
    todosCtrl = require('../controllers/todos.js')

todosRouter.get('/', todosCtrl.index)
todosRouter.get('/:id', todosCtrl.show)
todosRouter.post('/', todosCtrl.create)
todosRouter.patch('/:id', todosCtrl.update)
todosRouter.delete('/:id', todosCtrl.destroy)

module.exports = todosRouter;