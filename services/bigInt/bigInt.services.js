let veryBigNumber = 234n;
class BigIntServices {
    getBigInt() {
        return new Promise((resolve, reject) => {
            resolve (veryBigNumber)
        });
    }
}
module.exports = new BigIntServices();