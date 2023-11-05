// middleware/authenticate.js
const jwt = require('jsonwebtoken');
require('dotenv').config()

// const adminAccess = new RevokedAdminCache()
const authenticateToken = async(req, res, next) =>{
  const token = req.header('Authorization');
  const {reset_password, email} = req.body
  
  if (!token) {
    return res.status(401).send({success: false, msg: "No authentication token"});
  }

  jwt.verify(token, process.env.AUTH_SECRET_KEY, (err, user) => {
    if (err) {
        const msg = reset_password? "Link expired or Invalid." : "Could not parse your authentication token. Please try signing in again."
      return res.status(403).send({
        success: false, msg
        });
    }
    console.log(user);
    if(reset_password && email !== user.email){
        return res.status(403).send({
            success: false, msg : "Email does not match"
            });
    }
    req.user = user;
    
    next();
  });
}

module.exports = { authenticateToken };