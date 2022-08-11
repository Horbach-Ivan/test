
const express = require("express");
const router = express.Router();
const NumberController  = require('../../controllers/number/number.controllers')

router.get("/", async (req, res) =>{
    try{
        const chislo = await NumberController.getNumber();
        res.send(chislo);
    } catch (e){
        console.log(e)
    }
});


module.exports = router;
