const express = require('express')
const bodyParser = require('body-parser')

require('./database-connection')
const teacherRouter = require('./routes/teacher')
const app = express()

app.use(bodyParser.json())
app.use('/teachers', teacherRouter)
app.set('view engine', 'pug')

app.get('/', (req, res, next) => {
  res.render('index')
})

module.exports = app