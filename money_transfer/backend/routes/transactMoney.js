const express = require('express');
const { transactMoney } = require('../dbServices/dbDepositMoney');
const router = express.Router();

router.post('/deposit-money', async (req, res) =>{
    const { user_id, method, amount, currency, termsConditions, status, ref_code } = req.body;
    const table = "deposit_details"
        console.log(req.body);
    try{
        const response = await transactMoney(
            user_id, method, amount, currency, termsConditions, status, ref_code, table
        )
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

router.post('/withdraw-money', async (req, res) =>{
    const { user_id, method, amount, currency, termsConditions, status, ref_code } = req.body;
    const table = "withdraw_details"
        console.log(req.body);
    try{
        const response = await transactMoney(
            user_id, method, amount, currency, termsConditions, status, ref_code, table
        )
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

module.exports = router;