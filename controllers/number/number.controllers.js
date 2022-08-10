const NumberServices = require('../../services/number/number.services')
class NumberController {
    async getNumber() {
        let number = await NumberServices.getNumber();
        return number
    }
}

module.exports = new NumberController();