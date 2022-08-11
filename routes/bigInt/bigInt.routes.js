const express = require("express");
const router = express.Router();
const BigIntController = require('../../controllers/bigInt/bigInt.controllers')

router.get("/", async (req, res) =>{ 
    try {
const veryBigNumber = await BigIntController.getBigInt();
res.send(JSON.stringify(veryBigNumber.toString()));
} catch(e){
    console.log(e);
}
}); 
module.exports = router;




