// BEGIN
const magic = (...numbers) => {
    const result = numbers.reduce((sum, number) => sum + number, 0);
    const newMagic = (...newNumbers) => {
        return magic(...numbers, ...newNumbers);
    }
    newMagic.valueOf = () => result;
    return newMagic;
}
export default magic;
// END
