const { getUsersTransactions, updateStatusTransaction, updateUserTransaction } = require("../../dbServices/admin/dbUserTransactions");
// const router = require("../transactMoney");
const express = require('express');
const router = express.Router();

router.post('/users-transactions', async (req, res) =>{
    const { user_id } = req.body;
        console.log(req.body);
    try{
        const response = await getUsersTransactions(user_id)
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

router.patch('/update-status', async (req, res) =>{
    const { transaction_id, status } = req.body;
        console.log(req.body);
    try{
        const response = await updateStatusTransaction(transaction_id, status)
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

router.patch('/modify-transaction', async (req, res) =>{
    const { transaction_id, amount, fees, description } = req.body;
        console.log(req.body);
    try{
        const response = await updateUserTransaction(transaction_id, amount, fees, description)
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

module.exports = router;