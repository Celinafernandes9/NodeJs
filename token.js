const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    const token = req.header('auth-token');

    if(!token) return res.status(400).send("Access denied");
    try {
       const verify = jwt.verify(token, process.env.token)
       res.userExists = jwt.verified();
       
       next();
    } catch (error) {
        res.status(404).send("Invalid token")
    }
}