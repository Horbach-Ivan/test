const ObjectServices = require('../../services/object/object.services')
class ObjectController {
   async getObject() {
        let object = await ObjectServices.getObject();
        return object
    }
}

module.exports = new ObjectController();