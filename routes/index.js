const express = require("express");
const router = express.Router();
const bigIntRoutes = require('./bigInt/bigInt.routes')
const stringRoutes = require('./string/string.routes')
const numberRoutes = require('./number/number.routes')
const objectRoutes = require('./object/object.routes')
const booleanRoutes = require('./boolean/boolean.routes')
router.use("/bigInt", bigIntRoutes);
router.use("/string", stringRoutes );
router.use('/number', numberRoutes);
router.use('/object', objectRoutes);
router.use('/boolean', booleanRoutes);



module.exports = router; 