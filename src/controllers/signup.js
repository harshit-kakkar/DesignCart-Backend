const { Customer } = require('../models/db')

async function createCustomer (customerDetails) {
    message = "Couldn't create user"
    status = 400
    console.log(customerDetails["first_name"])
    return { "message": message, "status": status}
}

module.exports = {
    createCustomer
}