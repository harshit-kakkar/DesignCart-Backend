const route = require('express').Router()

route.use('/auth', require('./auth'))
route.use('/account', require('./account'))

module.exports = route