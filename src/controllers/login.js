const { Customer } = require('../models/db')
const { Op } = require("sequelize")


async function authenticate(customerDetails) {
    let message = "Couldn't login user"
    let status = 400
    if (!customerDetails['email'] || !customerDetails["password"]) {
        message = "validation error"
        return { "message": message, "status": status }
    }

    customer = await Customer.findOne({
        where: {
            email: customerDetails['email']
        }
    })

    if (!customer) {
        message = "Wrong Username/password"
        return { "message": message, "status": status }
    }

    if (customer.pass_hash !== customerDetails["password"]) {
        message = "Wrong Username/password"
        return { "message": message, "status": status }
    }
    message = "Customer logged-in successfully"
    status = 200


    return { "message": message, "status": status }

}





module.exports = {
    authenticate
}