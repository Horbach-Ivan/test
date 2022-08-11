let chislo = 69;
class NumberServices {
    getNumber() {
        return new Promise((resolve, reject) => {
            resolve (chislo)
        });
    }
}
module.exports = new NumberServices();