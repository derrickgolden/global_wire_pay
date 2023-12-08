const express = require('express');
const { getUserDetailsByemail } = require('../dbServices/dbUsers');
const { insertTransfersDetails, insertNonuserTransferDetails, getTransfersDetails } = require('../dbServices/dbTransferMoney');
const { sendEmail } = require('../controllers/sendEmail');
const { generateNonuserMsg } = require('../controllers/emailMessages');
const router = express.Router();

router.post('/world-wire-pay', async (req, res) =>{
    const { amount, recipient, sender } = req.body;
        console.log("world-wire-pay", req.body);

    if(recipient?.user_id){
        const transfersRes = await insertTransfersDetails({
            sender_id: sender.user_id, receiver_id: recipient.user_id, 
            recipient_email:recipient.email, amount
        });
        return res.status(200).send(transfersRes);
    }else if(recipient?.email){
        try {
            const regUserRes = await getUserDetailsByemail(recipient.email);
            console.log("called email", regUserRes);
            if(regUserRes.success){
                console.log("calling registered users");
                const transfersRes = await insertTransfersDetails({
                    sender_id: sender.user_id, receiver_id: regUserRes.details[0].user_id, 
                    recipient_email:recipient.email, amount
                });
                return res.status(200).send(transfersRes);
            }else if(!regUserRes.success && regUserRes.msg === 'email unavaible'){
                console.log("calling non_user");
                const nonuserTransfersRes = await insertNonuserTransferDetails({
                    sender_id: sender.user_id, recipient_email:recipient.email, 
                    amount, ...recipient
                });
                if(nonuserTransfersRes.success){
                    const recipientNames = `${recipient.company_name || recipient.first_name} ${recipient.last_name}`
                    const senderNames = `${sender.company_name || sender.first_name} ${sender.last_name}`

                    const message = generateNonuserMsg(
                        recipientNames, senderNames, 'https://worldwirepay.com/#/user/signup', amount
                     )

                    const sendEnailRes = await sendEmail(recipient.email, "You have received money", message);
                    if(sendEnailRes.success){
                        return res.status(200).send({
                            success: true, msg: `The recipient has been sent email, the transaction will be completed if the recipient registers `
                        });
                    }else{
                        return res.status(200).send({
                            success: true, msg: `Transaction process initiated. The system was unable to send email to
                            recipient. Will try again after some time. 
                            The transaction will be completed if the recipient registers `
                        });
                    }
                }else{
                    return res.status(302).send(nonuserTransfersRes);
                }
            }else{
                return res.status(302).send(regUserRes);
            }
        } catch (error) {
            console.log(error)
            return res.status(302).send({success: false, res: error.message})
        }
    }
});

router.get("/transfers/:user_id", async (req, res) =>{
    const { user_id } = req.params;
    console.log(req.body)
    try {
        const transfersRes = await getTransfersDetails(user_id);
        return res.status(200).send(transfersRes);
    } catch (error) {
        console.log(error)
        return res.status(302).send({success: false, res: error.message})   
    }
})

module.exports = router
