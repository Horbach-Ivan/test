let number = 69;
class NumberServices {
    getNumber() {
        return new Promise((resolve, reject) => {
            resolve (number)
        });
    }
}
module.exports = new NumberServices();