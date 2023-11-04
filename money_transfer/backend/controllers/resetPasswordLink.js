const crypto = require('crypto');

const generateResetPasswordLink = (base_url) =>{
    const token = crypto.randomBytes(32).toString('hex'); // Generates a 64-character hexadecimal string
    const url = `${base_url}/user/reset-password?token=${token}`

    return url;
}

module.exports ={
    generateResetPasswordLink,
}