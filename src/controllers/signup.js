const { Customer } = require('../models/db')

async function createCustomer (customerDetails) {
    let message = "Couldn't create user"
    let status = 400
    if (!customerDetails["firstname"] || !customerDetails["lastname"] || !customerDetails["password"]){
        message = "validation error"
        return { "message": message, "status": status}
    }
    try {
        await Customer.create({
            email: customerDetails["email"],
            firstname: customerDetails["firstname"],
            lastname: customerDetails["lastname"],
            pass_hash: customerDetails["password"],
            mobile: customerDetails["mobile"],
            is_mobile_verified: false, 
            is_email_verified: false,
            last_login: new Date()
        })
        message = "User created successfully"
        status = 201
    } catch(e){
        console.log(e)
    }
    console.log(customerDetails)
    return { "message": message, "status": status}
}

module.exports = {
    createCustomer
}