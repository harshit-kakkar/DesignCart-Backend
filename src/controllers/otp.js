const fast2sms = require('fast-two-sms')

async function sendOtp(mobile){
    let message = "otp sent successfully"
    let status = 200
    let otp = "876346" // TODO: generate a random string here and store in customer table
    let otp_message = ` Dear user, your one time password for registration is ${otp}.
    DesignCart Team`

    var options = {authorization : process.env.API_KEY , message : otp_message ,  numbers : [mobile], showLogs: false}
    try{
        await fast2sms.sendMessage(options)
    }catch(e){
        console.log(e)
        status = 400
        message = "Failed to send otp"
    }
    return { message, status }
}

async function verifyOtp(otpToVerify, mobile){
    let message = "Incorrect otp"
    let status = 400
    let fetchedOtp = "876346" //TODO: fetch it from customer table using mobile phone
    if (fetchedOtp === otpToVerify){
        message = "OTP verified"
        status = 200
    }

    return { message, status }
}

module.exports = {
    sendOtp, 
    verifyOtp
}