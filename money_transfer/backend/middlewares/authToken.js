// middleware/authenticate.js
const jwt = require('jsonwebtoken');
require('dotenv').config()

// const adminAccess = new RevokedAdminCache()
const authenticateToken = async(req, res, next) =>{
  const token = req.header('Authorization');
  console.log(token);
  const {reset_password, email} = req.body
  
  if (!token) {
    return res.status(401).send({success: false, reLogin: true, msg: "No authentication token"});
  }

  jwt.verify(token, 'a9b4db8264b35a31c3826', (err, user) => {
    if (err) {
      console.error('JWT Verification Error:', err);
        const msg = reset_password? "Link expired or Invalid." : "Could not parse your authentication token. Please try to Login again."
      return res.status(403).send({
        success: false, msg, reLogin: true,
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