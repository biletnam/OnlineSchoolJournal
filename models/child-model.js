const mongoose = require('mongoose')

const GENDERS = ["male", "female", "undefined"]

const ChildSchema = mongoose.Schema({
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
  subjects: [{
    type: String
  }],
  listOfMarks: [{
    subject: {
      type: String,
      require: true
    },
    mark: {
      type: Number
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher'
    }
  }]
})

module.exports = mongoose.model('Child', ChildSchema)