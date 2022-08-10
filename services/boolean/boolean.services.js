let boolevoe = true;
class BooleanServices {
    getBoolean() {
        return new Promise((resolve, reject) => {
            resolve (boolevoe)
        });
    }
}
module.exports = new BooleanServices();