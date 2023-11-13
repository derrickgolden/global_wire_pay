const express = require('express');
const { insertCardInfo, getCardInfo } = require('../dbServices/dbCardInfo');
const router = express.Router();

router.post('/add-card', async (req, res) =>{

    const cardInfo = req.body;
        console.log(req.body);
    try{
        const response = await insertCardInfo(cardInfo)
        response.error ? 
            res.status(302).send(response) :
            res.status(200).send(response)  
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});
router.get('/get-card/:user_id', async (req, res) =>{
    const {user_id} = req.params;
    console.log("get_card", user_id)
    try{
        const response = await getCardInfo(user_id);
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

module.exports = router