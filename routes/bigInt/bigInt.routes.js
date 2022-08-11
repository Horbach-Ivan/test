const express = require("express");
const router = express.Router();
const BigIntController = require('../../controllers/bigInt/bigInt.controllers')

router.get("/", async (req, res) =>{ 
    try {
const veryBigNumber = await BigIntController.getBigInt();
res.send(veryBigNumber);
} catch(e){
    console.log(e);
}
}); 
module.exports = router;




