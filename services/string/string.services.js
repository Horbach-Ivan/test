const stroka = 'string'
class StringServices {
    getString() {
        return new Promise((resolve, reject) => {
            resolve (stroka)
        });
    }
}
module.exports = new StringServices();