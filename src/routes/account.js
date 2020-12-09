const route = require('express').Router()
const { fetchProfile } = require('../controllers/profile')

route.get('/profile', async (req, res) => {
    let req_email = ""
    if (req.query.email){
        req_email = req.query.email
    }
    else{
        res.status(400).send({"message": "Email id required to fetch profile"})
    }
    let customerProfile = await fetchProfile(req_email)
    res.status(customerProfile["status"]).send(customerProfile["profileObj"])
})

module.exports = route