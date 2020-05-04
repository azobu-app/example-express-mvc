const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send({
    title: 'Example Express',
    message: 'Welcome to Example Express!',
  })
})

module.exports = router
