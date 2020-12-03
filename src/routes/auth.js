const { createCustomer } = require('../controllers/signup')
const { authenticate } = require('../controllers/login')



const route = require('express').Router()

route.post('/signup', async (req, res) => {
    // Signup user the first time, with is_verified as false
    const customer_creation_obj = await createCustomer(req.body)
    res.status(customer_creation_obj["status"]).send({ "message": customer_creation_obj["message"] })
})

route.post('/login', async (req, res) => {
    //login user the first time , with is_verified as false
    const customer_loggedIn_obj = await authenticate(req.body)
    res.status(customer_loggedIn_obj["status"]).send({ "message": customer_loggedIn_obj["message"] })
})


module.exports = route