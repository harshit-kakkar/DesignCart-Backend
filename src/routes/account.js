const route = require('express').Router()
const { fetchProfile } = require('../controllers/profile')

route.get('/profile', async (req, res) => {
    let customerProfile = await fetchProfile("harshit@gmail.com")
    res.status(200).send(customerProfile)
})

module.exports = route