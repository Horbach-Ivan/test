const students = [ {name:'Ivan', age:'25'}, {name:'Ilona', age:'27'}, {name:'alexander', age:'28'}]
class ObjectServices {
    getObject() {
        return new Promise((resolve, reject) => {
            resolve (students)
        });
    }
}
module.exports = new ObjectServices();