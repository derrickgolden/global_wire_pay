const { generateCompleteTransactionMsg, generateCancelledTransactionMsg } = require("../../controllers/emailMessages");
const { sendEmail } = require("../../controllers/sendEmail");
const { getUsersTransactions, updateStatusTransaction, updateUserTransaction } = require("../../dbServices/admin/dbUserTransactions");

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
    const { transaction_id, status, email, first_name, last_name, amount, type } = req.body;
        // console.log(req.body);
    try{
        const response = await updateStatusTransaction(transaction_id, status)
        if(response.success) {
            // const getEmail = await getUserEmailById(user_id)
            if(status === "completed"){
                const completeTransactionMsg = generateCompleteTransactionMsg(first_name, amount, type, transaction_id)
                const emailRes = sendEmail(
                    email, "Payment Confirmation: Successfully Processed", 
                    completeTransactionMsg
                )
                // console.log(emailRes)
            }else if(status === "cancelled"){
                const cancelledTransactionMsg = generateCancelledTransactionMsg(first_name, amount, type, transaction_id)
                const emailRes = sendEmail(
                    email, "Payment Cancellation: Acknowledgment", 
                    cancelledTransactionMsg 
                )
                // console.log("cancelled" , emailRes)
            }
            
            res.status(200).send(response)
        }else{
            res.status(302).send(response)
        }
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

router.patch('/modify-transaction', async (req, res) =>{
    const { transaction_id, amount, fees, description, balance, user_id } = req.body;
        console.log(req.body);
    try{
        const response = await updateUserTransaction(transaction_id, amount, fees, description, balance, user_id)
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

module.exports = router;