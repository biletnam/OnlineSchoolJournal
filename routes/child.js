const express = require('express')
const router = express.Router()

const ChildService = require('../services/child-services')

// == Children
// Add a child
// POST /children
// With json: 
// {"firstName": "Sandy","lastName":"Harrison","age":13,
// "gender":"female","subjects":["math", "history"],
// "listOfMarks":[{"subject":"math","marks":[3,4,1,5]}, {"subject":"history","marks":[5,5,2,5]}]}

router.post('/', async (req, res, next) => {
  const child = await ChildService.add(req.body)
  res.send('i got it!' + child)
})

// View a list of all children
// GET /children
router.get('/', async (req, res, next) => {
  const children = await ChildService.findAll()
  res.render('children-list', {children})
})

// View a child profile by Id
// GET /children/:id
router.get('/:id', async (req, res, next) => {
  const child = await ChildService.find(req.params.id)
  res.render('person-details', {child})
})

// Remove a teacher
// DELETE /children/:id
router.delete('/:id', async (req, res, next) => {
  await ChildService.del(req.params.id)
  res.send('child removed!')
}) 

module.exports = router