const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send({
    title: 'Example Express',
    message: 'Welcome to Example Express!',
  })
})

router.get('/hello', (req, res, next) => {
  res.send({
    message: 'Hello world',
  })
})

module.exports = router
