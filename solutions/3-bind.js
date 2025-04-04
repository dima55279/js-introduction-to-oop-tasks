// BEGIN
const bind = (obj, fn) => {
    return (...numbers) => {
        return fn.call(obj, ...numbers);
    }
};
export default bind;
// END