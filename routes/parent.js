const express = require('express')
const router = express.Router()

const ParentService = require('../services/parent-services')

// == Parents
// Add a parent
// POST /parents
// With json:
// {"firstName":"Catlyn", "lastName":"Harrison","age":35,
// "gender":"female","children":["5a25229d3d827922b1966822"]}
router.post('/', async (req, res, next) => {
  const parents = await ParentService.add(req.body)
  res.send('i got it!' + parent)
})

// View a list of all parents
// GET /parents
router.get('/', async (req, res, next) => {
  const parents = await ParentService.findAll()
  res.render('parents-list', {parents})
})

// View a parent profile by Id
// GET /parents/:id
router.get('/:id', async (req, res, next) => {
  const parent = await ParentService.find(req.params.id)
  res.render('person-details', {parent})
})

// Remove a parent
// DELETE /parent/:id
router.delete('/:id', async (req, res, next) => {
  await ParentService.del(req.params.id)
  res.send('parent removed!')
})

module.exports = router