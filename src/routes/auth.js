const { createCustomer } = require('../controllers/signup')
const { sendOtp, verifyOtp } = require('../controllers/otp')
const { authenticate } = require('../controllers/login')
const jwt = require('jsonwebtoken');


const route = require('express').Router()

route.post('/signup', async (req, res) => {
    // Signup user the first time, with is_verified as false
    const customer_creation_obj = await createCustomer(req.body)
    res.status(customer_creation_obj["status"]).send({ "message": customer_creation_obj["message"] })
})

route.post('/login', async (req, res) => {
    //login user the first time , with is_verified as false
    const customer_loggedIn_obj = await authenticate(req.body)
    // res.status(customer_loggedIn_obj["status"]).send({ "message": customer_loggedIn_obj["message"] })
    if (customer_loggedIn_obj["message"] == "validation error") {
        res.json("Valdation error")
    }
    if (customer_loggedIn_obj["message"] == "Wrong Username/password") {
        res.json("Wrong Username/password")
    }


    if (customer_loggedIn_obj["message"] == "Customer logged-in successfully") {
        //jwt magic
        jwt.sign(req.body, process.env.SECRET_KEY, { expiresIn: '2000s' }, (err, token) => {
            res.json({
                token
            });
        });
    }

})

route.post("/protected", verifyToken, (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
        if (err) {
            res.sendStatus(403);
            console.log(req.token)
            console.log(err)

        } else {
            res.json({
                message: "Authorized by jwt token",
                authData

            });
        }
    });

})


// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    console.log("header " + bearerHeader)
    console.log("------------")
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {

        // Split at the space
        const bearer = bearerHeader.split(" ");

        // // Get token from array
        const bearerToken = bearer[1];

        // Set the token
        req.token = bearerToken;

        // Next middleware
        next();
    } else {

        // Forbidden
        res.sendStatus(403);
        console.log("Failed at token split")

    }

}




route.post('/otp/send', async (req, res) => {
    //send otp from this route
    let sendOtp_res = await sendOtp(req.body["mobile"])
    res.status(sendOtp_res["status"]).send({ "message": sendOtp_res["message"] })
})

route.post('/otp/verify', async (req, res) => {
    //verify the otp sent
    let verifyOtp_res = await verifyOtp(req.body["otp"], req.body["mobile"])
    res.status(verifyOtp_res["status"]).send({ "message": verifyOtp_res["message"] })
})

module.exports = route