let veryBigNumber = 234n;
class BigIntServices {
    getBigInt() {
        return new Promise((res, rej) => {
            res(veryBigNumber)
        });
    }
}
module.exports = new BigIntServices();