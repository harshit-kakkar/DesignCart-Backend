const jwt = require('jsonwebtoken');

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];

    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {

        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];

        jwt.verify(bearerToken, process.env.SECRET_KEY, (err, authData) => {
            if (err) {
                res.status(403).send({"message": "Unauthorized request"});
                console.log(req.token)
                console.log(err)
    
            } else {
                req.email = authData["email"]
                next()
            }
        });
    } else {
        // Forbidden
        console.log(bearerHeader)
        res.status(403).send({"message": "Unauthorized request"});
        console.log("Failed at token split")
    }
}

module.exports = {
    verifyToken
}