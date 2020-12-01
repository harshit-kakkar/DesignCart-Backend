const route = require('express').Router()

route.use('/auth', require('./auth'))

module.exports = route