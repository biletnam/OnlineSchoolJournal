const mongoose = require('mongoose')

const GENDERS = ["male", "female", "undefined"]

const TeacherSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    min: 0
  },
  gender: {
    type: String,
    enum: GENDERS
  },
  subject: {
    type: String,
    require: true
  },
  startWorkingDate: Date
})

module.exports = mongoose.model('Teacher', TeacherSchema)