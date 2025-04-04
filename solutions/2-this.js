// BEGIN
const make = (numer = null, denom = null) => {
    return {
        numer: numer,
        denom: denom,
        setNumer(value) {
            this.numer = value;
        },
        setDenom(value) {
            this.denom = value;
        },
        getNumer() {
            return this.numer;
        },
        getDenom() {
            return this.denom;
        },
        toString() {
            return `${this.numer}/${this.denom}`;
        },
        add(rat) {
            return make((this.numer * rat.getDenom() + this.denom * rat.getNumer()), (this.denom * rat.getDenom()));
        }
    }
}
export default make;
// END