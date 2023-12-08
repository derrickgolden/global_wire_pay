const express = require('express');
const { getAllTransfers } = require('../../dbServices/admin/dbTransfers');
const { updateStatusTransfers } = require('../../dbServices/admin/dbTransfers');
const { updateUserTransfers } = require('../../dbServices/admin/dbTransfers');
const { sendEmail } = require('../../controllers/sendEmail');
const { generateSuccessTransferReceiverMsg, generateSuccessTransferSenderMsg, 
    generateCancelSenderMsg, generateCancelReceiverMsg } 
    = require('../../controllers/emailMessages');
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
    const { transfer_id, status, recipient_email, sender_email, receiver_first_name,
    sender_first_name, amount, receiver_email } = req.body;
        console.log(req.body);
    try{
        const response = await updateStatusTransfers(transfer_id, status)
        if(response.success) {

            if(status === "completed"){
                const completeTransferReceiverMsg = generateSuccessTransferReceiverMsg(
                    receiver_first_name, amount, transfer_id, sender_first_name, sender_email
                )
                const senderRes = sendEmail(
                    receiver_email, "Transfer Confirmation: Successfully Processed", 
                    completeTransferReceiverMsg
                    )
                const completeTransferSenderMsg = generateSuccessTransferSenderMsg(
                    sender_first_name, amount, transfer_id, receiver_first_name, receiver_email
                )
                const receiverRes = sendEmail(
                    sender_email, "Transfer Confirmation: Successfully Processed", 
                    completeTransferSenderMsg
                )

            }else if(status === "cancelled"){
                const cancellTransferSenderMsg = generateCancelSenderMsg(
                    sender_first_name, amount, transfer_id, receiver_first_name, receiver_email,
                )
                const senderRes = sendEmail(
                    sender_email, "Transfer Cancellation", 
                    cancellTransferSenderMsg, 
                )

                const cancellTransferReceiverMsg = generateCancelReceiverMsg(
                    receiver_first_name, amount, transfer_id, sender_first_name, sender_email
                )
                const receiverRes = sendEmail(
                    recipient_email, "Transfer Cancellation", 
                    cancellTransferReceiverMsg
                )
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