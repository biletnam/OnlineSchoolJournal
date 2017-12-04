const fs = require('fs')

const ParentModel = require('../models/parent-model')

function findAll() {
  return ParentModel.find()
}

function find(id) {
  return ParentModel.findById(id)
}

function add(parent) {
  return ParentModel.create(parent)
}

function del(id) {
  return ParentModel.findByIdAndRemove(id)
}

module.exports = {
  findAll,
  find,
  add,
  del
}