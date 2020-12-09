const { Customer } = require('../models/db')

async function fetchProfile(email){
    let status = 200
    let profileObj = {}
    let customer = await Customer.findOne({where: {email}})
    if (customer){
        profileObj["first_name"] = customer.firstname
        profileObj["last_name"] = customer.lastname
        profileObj["gender"] = customer.gender
        profileObj["mobile"] = customer.mobile
        profileObj["email"] = customer.email
    }
    else{
        profileObj["message"] = "User doesn't exist"
        status = 400
    }

    return {profileObj, status}
}

module.exports = {
    fetchProfile
}