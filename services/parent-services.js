const fs = require('fs')

const ParentModel = require('../models/parent-model')
const ChildService = require('../services/child-services')

function findAll() {
  return ParentModel.find()
}

function find(id) {
  return ParentModel.findById(id).populate('children', 'firstName')
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
  parent.children.push(child)
  console.log(parent.children)
  child.parents.push(parent)
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