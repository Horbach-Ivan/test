
const express = require("express");
const router = express.Router();
const objectController  = require('../../controllers/object/object.contollers')


router.get("/", async (req, res) =>{
    try{
        const students = await objectController.getObject();
        res.send(students);
    } catch (e){
        console.log(e)
    }
});
module.exports = router;