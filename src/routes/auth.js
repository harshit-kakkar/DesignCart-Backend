const { createCustomer } = require('../controllers/signup')
const { sendOtp, verifyOtp } = require('../controllers/otp')
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

route.post('/otp/send', async (req, res) => {
    //send otp from this route
    let sendOtp_res = await sendOtp(req.body["mobile"])
    res.status(sendOtp_res["status"]).send({"message":sendOtp_res["message"]})
})

route.post('/otp/verify', async (req, res) => {
    //verify the otp sent
    let verifyOtp_res = await verifyOtp(req.body["otp"], req.body["mobile"])
    res.status(verifyOtp_res["status"]).send({"message":verifyOtp_res["message"]})
})

module.exports = route