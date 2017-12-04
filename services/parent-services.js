const fs = require('fs')

const ParentModel = require('../models/parent-model')
const ChildService = require('../services/child-services')

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

async function addChild(childId, parentId) {
  const parent = await find(parentId)
  const child = await ChildService.find(childId)
  parent.children.addToSet(child)
  child.parents.addToSet(parent)
  await parent.save()
  await child.save()
}

module.exports = {
  findAll,
  find,
  add,
  del,
  addChild
}