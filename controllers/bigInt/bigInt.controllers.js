const BigIntServices = require('../../services/bigInt/bigInt.services')
class BigIntController {
    async getBigInt() {
        let bigInt =  await BigIntServices.getBigInt();
        return bigInt
    }
}

module.exports = new BigIntController();