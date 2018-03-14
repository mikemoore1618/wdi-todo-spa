const
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser')
  PORT = 3000

mongoose.connect('mongodb://localhost/todo-spa', (err) => {
  console.log(err || "Connected to MongoDB.")
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

// The back-end
// 1. Build your Todo model in './models/Todo.js'
// 2. Build your 5 Todo CRUD routes here.
//    the "update" route should toggle a Todo's 'completed' Boolean
// 3. Test all of your routes in postman (they only need to send and receive JSON)

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}.`)
})