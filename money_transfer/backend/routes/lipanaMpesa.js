const express = require('express');
const router = express.Router()
const {
    initiateSTKPush,
    stkPushCallback,
    confirmPayment
} = require("../controllers/lipanaMpesa");


const {accessToken} = "../middlewares/generateMpesaToken";

router.post('/stkPush',  async(req, res) =>{
    const { amount, phone, order_no } = req.body;
        console.log(req.body);
    try{
        // const response = await initiateSTKPush(amount, phone, order_no)
       console.log("response");
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
})
// router.post('/stkPushCallback/:Order_ID').post(stkPushCallback)
// router.post('/confirmPayment/:CheckoutRequestID').post(accessToken,confirmPayment)

module.exports = router
