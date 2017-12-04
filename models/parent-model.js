const mongoose = require('mongoose')

const GENDERS = ["male", "female", "undefined"]

const ParentSchema = mongoose.Schema({
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
  children: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Child'
  }
})

module.exports = mongoose.model('Parent', ParentSchema)