const express = require('express');
const { getAllUsersDetails } = require('../../dbServices/admin/dbUserDetails');
const router = express.Router();

router.get('/allusers', async (req, res) =>{
    console.log(req.body);
try{
    const response = await getAllUsersDetails()
    response.success ? 
        res.status(200).send(response) : 
        res.status(302).send(response)
}catch(error){
    res.status(302).send({success: false, res: error.message})
}
});

module.exports = router