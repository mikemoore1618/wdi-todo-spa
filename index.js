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

 
/* ON THE SERVER SIDE:
1. Build your Todo model in './models/Todo.js' (more info in that file)

2. Build your 5 Todo CRUD routes here:
   a. GET "/api/todos" to retrieve all todo's
   b. GET "/api/todos/:id" to retrieve a single todo
   c. POST "/api/todos" to create a new todo
   d. DELETE "/api/todos/:id" to destroy
   e. PATCH "/api/todos/:id" to update todo. 
      Don't worry about updating the todo's body,
      this route should simply toggle a todo's 'completed'
      Boolean value between true / false.

3. Test all of your routes in Postman (they only need to send and receive JSON)
*/

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}.`)
})