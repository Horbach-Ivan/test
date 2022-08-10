const StringServices = require('../../services/string/string.services')
class StringController {
    async getString() {
        let string =  await StringServices.getString();
        return string
    }
}

module.exports = new StringController();