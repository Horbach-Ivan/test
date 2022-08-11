
const express = require("express");
const router = express.Router();
const StringController  = require('../../controllers/string/string.controllers')


router.get("/", async (req, res) =>{
    try{
        const string = await StringController.getString();
        res.send(string);
    } catch (e){
        console.log(e)
    }
});
module.exports = router;