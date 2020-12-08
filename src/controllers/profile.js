const { Customer } = require('../models/db')

async function fetchProfile(email){
    let status = 200
    let customer = await Customer.findOne({where: {email}})
    console.log(customer.firstname)
    return "hey"
}

module.exports = {
    fetchProfile
}