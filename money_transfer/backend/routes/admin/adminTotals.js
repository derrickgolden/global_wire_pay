const express = require('express');
const { getAdminDetails } = require('../../dbServices/admin/dbAdminTotals');
const router = express.Router();


router.get('/admin-details', async (req, res) =>{
    console.log(req.body)
    try{
        const response = await getAdminDetails()
        response.success ? 
            res.status(200).send(response) : 
            res.status(302).send(response)
    }catch(error){
        res.status(302).send({success: false, res: error.message})
    }
});

 module.exports = router;