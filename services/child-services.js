const fs = require('fs')

const ChildModel = require('../models/child-model')

function findAll() {
  return ChildModel.find()
}

function find(id) {
  return ChildModel.findById(id)
}

function add(child) {
  return ChildModel.create(child)
}

function del(id) {
  return ChildModel.findByIdAndRemove(id)
}

module.exports = {
  findAll,
  find,
  add,
  del
}