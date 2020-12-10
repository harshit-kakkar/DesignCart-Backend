const route = require('express').Router()
const { fetchProfile, updateProfile } = require('../controllers/profile')

route.get('/profile', async (req, res) => {
    let req_email = ""
    if (req.email){
        req_email = req.email
    }
    else{
        res.status(400).send({"message": "Email id required to fetch profile"})
    }
    let customerProfile = await fetchProfile(req_email)
    res.status(customerProfile["status"]).send(customerProfile["profileObj"])
})

route.patch('/profile', async (req, res) => {
    update_res = await updateProfile(req.body, req.email)
    res.status(update_res["status"]).send({"message":update_res["message"]})
})

module.exports = route