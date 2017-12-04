const fs = require('fs')

const TeacherModel = require('../models/teacher-model')

function findAll() {
  return TeacherModel.find()
}

function find(id) {
  return TeacherModel.findById(id)
}

function add(teacher) {
  return TeacherModel.create(teacher)
}

function del(id) {
  return TeacherModel.findByIdAndRemove(id)
}

module.exports = {
  findAll,
  find,
  add,
  del
}