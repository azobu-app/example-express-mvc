const express = require('express')
const router = express.Router()

const users = require('./controller')

router.get('/', users.getAll)
router.get('/:id', users.getById)
router.post('/', users.add)

module.exports = router
