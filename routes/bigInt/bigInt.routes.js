
const express = require("express");
const router = express.Router();
const bigIntController = require('../../controllers/bigInt/bigInt.controllers')

router.get("/veryBigNumber", async (req, res) =>{ 
    try {
const bigInt = await bigIntController.getBigInt();
res.send(bigInt) 
} catch(e){
    console.log(e);
}
}); 
module.exports = router;