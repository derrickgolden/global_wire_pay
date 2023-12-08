const express = require('express');
const { getAllUsersDetails, updateUserBalance } = require('../../dbServices/admin/dbUserDetails');
const { generateRewardMessage } = require('../../controllers/emailMessages');
const { sendEmail } = require('../../controllers/sendEmail');
const router = express.Router();

router.get('/allusers', async (req, res) =>{
    console.log(req.body);
try{
    const response = await getAllUsersDetails()
    response.success ? 
        res.status(200).send(response) : 
        res.status(302).send(response)
}catch(error){
    res.status(302).send({success: false, res: error.message})
}
});

router.post('/user/balance-update', async (req, res) =>{
    const {user_id, first_name, last_name, amount, email, balance} = req.body
try{
    const response = await updateUserBalance( balance, user_id)

    if(Number(amount) > 0){
        const rewardMessage = generateRewardMessage(first_name, last_name, amount, balance)
        sendEmail(email, "You have received money", rewardMessage)
    }

    response.success ? 
        res.status(200).send(response) : 
        res.status(302).send(response)
}catch(error){
    res.status(302).send({success: false, res: error.message})
}
});

module.exports = router