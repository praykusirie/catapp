const express = require('express')
const { getAllCats, getCatById } = require('../controllers/catsControllers')
const router = express.Router()

router.get('/api/cats', getAllCats)
router.get('/api/cats/:id', getCatById)

module.exports = router