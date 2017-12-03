const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

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
  subject: {
    type: String,
    require: true
  },
  startWorkingDate: Date
})
TeacherSchema.plugin(AutoIncrement, {inc_field: 'id'})
module.exports = mongoose.model('Teacher', TeacherSchema)