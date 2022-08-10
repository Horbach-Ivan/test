const BooleanServices = require('../../services/boolean/boolean.services')
class BooleanController {
   async getBoolean() {
        let boolevoe = await BooleanServices.getBoolean(); 
        return boolevoe
    }
}

module.exports = new BooleanController();