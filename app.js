const express = require('express')
const bodyParser = require('body-parser')

require('./database-connection')
const teacherRouter = require('./routes/teacher')
const childRouter = require('./routes/child')
const app = express()

app.use(bodyParser.json())
app.use('/teachers', teacherRouter)
app.use('/children', childRouter)
app.set('view engine', 'pug')

app.get('/', (req, res, next) => {
  res.render('index')
})

module.exports = app