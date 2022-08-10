
const express = require("express");
const router = express.Router();
const NumberController  = require('../../controllers/number/number.controllers')

router.get("/number", async (req, res) =>{
    try{
        const number = await NumberController.getNumber();
        res.send(number);
    } catch (e){
        console.log(e)
    }
});


module.exports = router;
