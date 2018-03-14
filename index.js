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

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}.`)
})