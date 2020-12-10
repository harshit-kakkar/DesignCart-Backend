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

async function updateProfile(reqObj){
    let status = 400
    let message = "Couldn't update the profile"

    let updateKey = reqObj["object_to_update"]
    let updateObj = {}
    updateObj[updateKey] = reqObj["new_value"]

    // Only allowing to update these 3 parameters as of now.
    let allowedColumnUpdates = ["firstname", "lastname", "gender"]
    if ( allowedColumnUpdates.indexOf(updateKey) < 0 ){
        message = "Please provide the correct object to update"
        return {message, status}
    }

    try{
        await Customer.update(
            updateObj,
            {where: { email: reqObj["email"] }}
        )
        status = 200
        message = "Profile updated"
    }catch (e){
        console.log("Error when trying to update the profile ",e)
    }

    return {message, status}
}

module.exports = {
    fetchProfile, updateProfile
}