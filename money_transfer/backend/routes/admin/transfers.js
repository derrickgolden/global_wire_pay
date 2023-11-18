const express = require('express');
const { getAllTransfers } = require('../../dbServices/admin/dbTransfers');
const { updateStatusTransfers } = require('../../dbServices/admin/dbTransfers');
const { updateUserTransfers } = require('../../dbServices/admin/dbTransfers');
const { sendEmail } = require('../../controllers/sendEmail');
const { completeTransaction, cancelledTransaction } = require('../../controllers/emailMessages');
const { getAllnonuserTransfers } = require('../../dbServices/admin/dbTransfers');
const router = express.Router();

router.get('/transfers', async (req, res) =>{
        console.log(req.body);
    try{
        const response = await getAllTransfers()
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

router.get('/transfers/non-users', async (req, res) =>{
        console.log(req.body);
    try{
        const response = await getAllnonuserTransfers()
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

router.patch('/transfers/update-status', async (req, res) =>{
    const { transfer_id, status, recipient_email, sender_email } = req.body;
        console.log(req.body);
    try{
        const response = await updateStatusTransfers(transfer_id, status)
        if(response.success) {
            // const getEmail = await getUserEmailById(user_id)
            if(status === "completed"){
                const senderRes = sendEmail(
                    sender_email, "Payment Confirmation: Successfully Processed", 
                    completeTransaction
                )
                const receiverRes = sendEmail(
                    recipient_email, "Payment Confirmation: Successfully Processed", 
                    completeTransaction
                )
                console.log(recipient_email)
            }else if(status === "cancelled"){
                const senderRes = sendEmail(
                    sender_email, "Payment Cancellation: Acknowledgment", 
                    cancelledTransaction 
                )
                const receiverRes = sendEmail(
                    recipient_email, "Payment Cancellation: Acknowledgment", 
                    cancelledTransaction 
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

router.patch('/transfers/modify-transfers', async (req, res) =>{
    const { transfer_id, amount, receiver_fees, sender_fees, description, receiver_balance, sender_balance, receiver_id, sender_id, } = req.body;
        console.log(req.body);
    try{
        const response = await updateUserTransfers(
            transfer_id, amount, receiver_fees, sender_fees, description, receiver_balance, sender_balance, receiver_id, sender_id,
            )
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

module.exports = router