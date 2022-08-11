const BigIntServices = require('../../services/bigInt/bigInt.services')
class BigIntController {
    async getBigInt() {
        let veryBigNumber =  await BigIntServices.getBigInt();
        return veryBigNumber
    }
}

module.exports = new BigIntController();