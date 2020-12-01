const { Customer } = require('../models/db')
const { Op } = require("sequelize")

async function checkAlreadyExists (email, mobile){
    let alreadyExists = true
    let errorMessage = "User already exists"

    try{
        customer = await Customer.findAll({
            where: {
                [Op.or]: [
                  { email },
                  { mobile }
                ]
            }
        })
    } catch(e) {
        throw e
    }
    if (customer.constructor === Array && customer.length===0){
        alreadyExists = false
        errorMessage = null
    }
    return {"message": errorMessage, "exists": alreadyExists}
}

async function createCustomer (customerDetails) {
    let message = "Couldn't create user"
    let status = 400
    if (!customerDetails["firstname"] || !customerDetails["lastname"] || !customerDetails["password"] || !customerDetails["mobile"]){
        message = "validation error"
        return { "message": message, "status": status}
    }
    alreadyExists = await checkAlreadyExists(customerDetails["email"], customerDetails["mobile"])
    if (alreadyExists["exists"]){
        message = "User already exists"
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