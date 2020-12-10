const route = require('express').Router()
const { verifyToken } = require('../../authorization_middleware');

route.use('/auth', require('./auth'))
route.use('/account',verifyToken, require('./account'))

module.exports = route