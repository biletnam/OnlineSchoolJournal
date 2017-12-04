const fs = require('fs')

const TeacherModel = require('../models/teacher-model')
const ChildService = require('../services/child-services')

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

async function putMark(mark, childId, teacherId) {
  const teacher = await find(teacherId)
  const subject = await teacher.subject
  const putMarkTo = await ChildService.find(childId)
  putMarkTo.listOfMarks.addToSet({"subject": subject, "mark": mark, "teacher": teacher})
  const updatedChild = await putMarkTo.save()
}

module.exports = {
  findAll,
  find,
  add,
  del,
  putMark
}