const
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser')
  PORT = 3000

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}.`)
})