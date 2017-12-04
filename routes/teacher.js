const express = require('express')
const router = express.Router()

const TeacherService = require('../services/teacher-services')

// == Teachers
// Add a teacher
// POST /teachers
// With json {"firstName":"Anna","lastName":"Johnson","age":34,"subject":"math","startWorkingDate":"2011-10-12"}

router.post('/', async (req, res, next) => {
  const teacher = await TeacherService.add(req.body)
  res.send('i got it!' + teacher)
})

// View a list of all teachers
// GET /teachers
router.get('/', async (req, res, next) => {
  const teachers = await TeacherService.findAll()
  res.render('person-list', {teachers})
})

// View a teacher profile by Id
// GET /teachers/:id
router.get('/:id', async (req, res, next) => {
  const teacher = await TeacherService.find(req.params.id)
  res.render('person-details', {teacher})
})

// Remove a teacher
// DELETE /teachers/:id
router.delete('/:id', async (req, res, next) => {
  await TeacherService.del(req.params.id)
  res.send('teacher removed!')
})

module.exports = router