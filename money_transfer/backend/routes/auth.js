var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const { 
    signupUser, loginUser, resetPassword, storeLinkToken, getLinkToken, loginAdmin,
} =  require('../dbServices/dbAuth');
// const { sendText } = require('../controllers/sendText');
// const { generateRandomVerificationCode } = require('../controllers/randomCode');
// const { authenticateToken } = require('../middleware/authToken');
// const { storeTokens } = require('../dbServices/dbTokens');
const { generateAuthToken } = require('../controllers/generateToken');
const { getUserDetailsByemail } = require('../dbServices/dbUsers');
const { sendResetPasswordLink } = require('../controllers/sendResetPasswordLink');
const { generateResetPasswordLink } = require('../controllers/resetPasswordLink');
const { authenticateToken } = require('../middlewares/authToken');
const { generatePassResetMsg, generateWelcomeMessage } = require('../controllers/emailMessages');
const { sendEmail } = require('../controllers/sendEmail');

router.post('/signup', async (req, res) =>{
    const { first_name, last_name, email, remember_me, country,
        password, phone } = req.body;
    try{
        const hash = await bcrypt.hash(password, 10);
        const response = await signupUser(first_name, last_name, email, remember_me, country,
            hash, phone)
        if(response?.sendEmail){
            const welcomeMsg = generateWelcomeMessage(first_name, last_name)
            sendEmail(email, "Welcome to world wire pay", welcomeMsg);
        }
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

router.post('/login', async (req, res) =>{
    const { email, password, loginType} = req.body;

    const response = await loginUser(email);
    const { passwordHash, userAvailable, details, res: loginRes } = response;

    try {
        if(loginRes?.msg?.length){
            return res.status(200).send({success: false, msg: "Sorry, server error occurred", details: response});
        }
        if(!userAvailable){
            return res.status(200).send({success: false, msg: "Email not registered", details: response});
        }

        const match = await bcrypt.compare(password, passwordHash);
        if(match) {
            // Create a JWT token
            const {user_id, first_name, last_name, email} = details;
            const expiresInDays = 1;

            const { token, exp_date } = await generateAuthToken(
                user_id, first_name, last_name, email, expiresInDays
            );
            
            return res.status(200).send({success: true, token, msg: "User Found", details}) ;
            
        }else{
            return res.status(200).send({success: false, msg: "Incorrect Password"});
        }
    } catch (error) {
        console.log(error)
        return res.status(404).send({success: false, msg: error.message})
    }

});
router.post('/loginadmin', async (req, res) =>{
    const { email, password, loginType} = req.body;

    const response = await loginAdmin(email);
    const { passwordHash, userAvailable, details } = response;

    try {
        if(!userAvailable){
            return res.status(200).send({success: false, msg: "Email not registered", details: response});
        }

        const match = await bcrypt.compare(password, passwordHash);
        if(match) {
            // Create a JWT token
            const {admin_id, first_name, last_name, email} = details;
            const expiresInDays = 1;

            const { token, exp_date } = await generateAuthToken(
                admin_id, first_name, last_name, email, expiresInDays
            );
            
            return res.status(200).send({success: true, token, msg: "Admin Found", details}) ;
            
        }else{
            return res.status(200).send({success: false, msg: "Incorrect Password"});
        }
    } catch (error) {
        console.log(error)
        return res.status(404).send({success: false, msg: error.message})
    }

});

router.patch('/reset-password', async(req, res) =>{
    const { password, email } = req.body;
    const token = req.header('Authorization');

    try {
        const tokenResponce = await getLinkToken(token)
        if(tokenResponce.success){
            const hash = await bcrypt.hash(password, 10);
    
            const response = await resetPassword(hash, email)
            return response.success ?
                res.status(200).send(response) :
                res.status(400).send(response)
        }else{
            return res.status(400).send(tokenResponce);
        }

    } catch (error) {
        console.log(error)
    }
});

router.post('/forgot-password', async(req, res) =>{
    const { email } = req.body;
    try {
        const response = await getUserDetailsByemail(email);

        if(response.success ){
            const {user_id, first_name, last_name, email} = response.details[0];
            const {link,token} = await generateResetPasswordLink('https://worldwirepay.com');
            const storeTokens = await storeLinkToken(user_id,email,token,)
            if(storeTokens.success){
                const resetMsg = generatePassResetMsg(first_name, link)
                const resp = await sendEmail(email, 'Password Reset Request', resetMsg);

                return resp.success ?
                    res.status(200).send({msg: "Link sent", ...response}):
                    res.status(400).send(resp)
                }
            }
        return res.status(400).send(response)
    } catch (error) {
        console.log(error)
        res.status(400).send({success: false, msg: "serverside error", error: error.message})
    }
});

// router.post('/password/verifycode', async(req, res) =>{
//     const { code, username } = req.body;

//     try {
//         const response = await getRandomCode(username);
//         if(response.success){
//             code === response.code ?
//                 (response.exp_time >= new Date() ? 
//                     res.status(200).send({success: true, username: response.username}) : 
//                     res.status(401).send({success: false, msg: "Code expired"}))  :
//                 res.status(401).send({success: false, msg: "Wrong code"}) 
//         }
//             res.status(400).send(response)
//     } catch (error) {
//         console.log(error)
//     }
// });


// router.post('/addnew', authenticateToken, async(req,res) =>{
//     const { admin_id, admin_role: user_role } = req.user;
//     if(user_role !== 1){
//         return res.status(302).send({success: false, 
//             msg: "Only admin with role of landlord are allowed to add admins"})
//     };

//     const { firstname, lastname, username, phone, email, 
//         password, admin_role, } = req.body;
//     const added_by = admin_id;

//     try{
//         const hash = await bcrypt.hash(password, 10);
//         const response = await signupUser(firstname, lastname, username, 
//             phone, email, hash, admin_role, added_by)
//         response.success > 0 ? 
//             res.status(200).send(response) : 
//             res.status(302).send( response);
//     }catch(error){
//         res.status(302).send({success: false, res: error.message})
//     }
// });


module.exports  = router;