// BEGIN
const each = (arr, callback) => {
    return arr.forEach((obj) => callback.call(obj));
}
export default each;
// END
