const fs = require('fs')

const TeacherModel = require('../models/teacher-model')

async function findAll() {
  return TeacherModel.find()
}

async function find(id) {
  return TeacherModel.findOne({ id })
}

async function add(teacher) {
  return TeacherModel.create(teacher)
}

async function del(id) {
  return TeacherModel.remove({ id })
}
module.exports = {
  findAll,
  find,
  add,
  del
}