const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  const baseUrl = req.protocol + '://' + req.get('host') + req.originalUrl

  res.send({
    title: 'Example Express',
    author: 'Azobu App',
    message: 'Welcome to Example Express API!',
    baseUrl: baseUrl,
  })
})

router.get('/hello', (req, res, next) => {
  res.send({
    message: 'Hello world',
  })
})

module.exports = router
