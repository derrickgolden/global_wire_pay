const express = require('express');
const { transactMoney, getTransactions } = require('../dbServices/dbDepositMoney');
const router = express.Router();

router.post('/deposit-money', async (req, res) =>{
    const { user_id, method, amount, currency, termsConditions, status, type, ref_code } = req.body;
        console.log(req.body);
    try{
        const response = await transactMoney(
            user_id, method, amount, currency, termsConditions, status, type, ref_code
        )
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

router.post('/withdraw-money', async (req, res) =>{
    const { user_id, method, amount, currency, termsConditions, status, type, ref_code } = req.body;
        console.log(req.body);
    try{
        const response = await transactMoney(
            user_id, method, amount, currency, termsConditions, status, type, ref_code
        )
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
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