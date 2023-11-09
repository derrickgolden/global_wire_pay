const express = require('express');
const router = express.Router();

router.post('/card-info', async (req, res) =>{
    const cardInfo = req.body;
        console.log(req.body);
    try{
        const response = await insertCardInfo(cardInfo)
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

module.exports = router