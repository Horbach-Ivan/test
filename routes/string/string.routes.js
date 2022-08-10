
const express = require("express");
const router = express.Router();
const stringController  = require('../../controllers/string/string.controllers')


router.get("/string", async (req, res) =>{
    try{
        const string = await stringController.getString();
        res.send(string);
    } catch (e){
        console.log(e)
    }
});
module.exports = router;