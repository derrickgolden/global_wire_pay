const express = require('express');
const router = express.Router();

const { getUserDetailsByid } = require("../dbServices/dbUsers");

router.get('/user-details/:user_id', async(req, res) =>{
    const { user_id } = req.params;
    console.log("backend user_id", user_id)
    try {
        const response = await getUserDetailsByid(user_id)
       
            return response.success ?
                res.status(200).send(response) :
                res.status(400).send(response)

    } catch (error) {
        console.log(error)
        return res.status(404).send({success: false, msg: error.message})
    }
});

module.exports = router;