const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const rootMiddleware = require('./middlewares')
const usersMiddleware = require('./middlewares/users')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', rootMiddleware)
app.use('/users', usersMiddleware)

module.exports = app
