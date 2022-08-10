
const express = require("express");
const router = express.Router();
const booleanController  = require('../../controllers/boolean/boolean.controllers')

router.get("/boolean", async (req, res) =>{
    try{
        const boolean = await booleanController.getBoolean();
        res.send(boolean);
    } catch (e){
        console.log(e)
    }
});
module.exports = router;