const { createCustomer } = require('../controllers/signup')
const route = require('express').Router()

route.post('/signup', async (req, res) => {
    // Signup user the first time, with is_verified as false
    const customer_creation_obj = await createCustomer(req.body)
    res.status(customer_creation_obj["status"]).send(customer_creation_obj["message"])
})


module.exports = route