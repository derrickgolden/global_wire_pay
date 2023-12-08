const express = require('express');
const { transactMoney, getTransactions } = require('../dbServices/dbDepositMoney');
const { sendEmail } = require('../controllers/sendEmail');
const { withdrawInprogress, generateDepositProgressMsg, generateWithdrawalProgressMsg } = require('../controllers/emailMessages');
const { getUserEmailById } = require('../dbServices/dbUsers');
const router = express.Router();

router.post('/deposit-money', async (req, res) =>{
    const { user_id, email, method, amount, currency, termsConditions, status, type, ref_code } = req.body;
        console.log(req.body);
    try{
        const response = await transactMoney(
            user_id, method, amount, currency, termsConditions, status, type, ref_code
        )  

        if(response.success) {
            const {success, email, first_name, last_name} = await getUserEmailById(user_id)
            console.log(response);
            if(success){
                console.log("started email");
                const depositInprogressMsg = generateDepositProgressMsg(first_name, last_name, amount, response.readableDate);
                console.log("started email2", depositInprogressMsg);
                const emailRes = await sendEmail(email, "Deposit Processing: Awaiting Confirmation", depositInprogressMsg)
                console.log("started email3", emailRes);
            }
            
            res.status(200).send(response)
        }else{
            res.status(302).send(response)
        }
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

router.post('/withdraw-money', async (req, res) =>{
    const { user_id, email, method, amount, currency, termsConditions, status, type, ref_code } = req.body;
        console.log(req.body);
    try{
        const response = await transactMoney(
            user_id, method, amount, currency, termsConditions, status, type, ref_code
        )
        if(response.success) {
            const {success, email, first_name, last_name} = await getUserEmailById(user_id)
            const withdrawalProgressMsg = generateWithdrawalProgressMsg(first_name, last_name, amount)
            if(success){
                const emailRes = await sendEmail(email, "Withdraw Processing: Awaiting Confirmation", withdrawalProgressMsg)
                console.log(emailRes)
            }
            
            res.status(200).send(response)
        }else{
            res.status(302).send(response)
        }
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

router.post('/transactions', async (req, res) =>{
    const { user_id } = req.body;
        console.log(req.body);
    try{
        const response = await getTransactions(user_id)
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});



module.exports = router;