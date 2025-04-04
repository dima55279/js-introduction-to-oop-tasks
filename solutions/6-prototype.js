// BEGIN
function Money (value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}
Money.prototype.getValue = function getValue () {
    return this.value;
}
Money.prototype.getCurrency = function getCurrency () {
    return this.currency;
}
Money.prototype.exchangeTo = function exchangeTo (currency) {
    let newValue = this.value;
    if (currency === 'eur' && currency !== this.currency) {
        newValue *= 0.7;
    }
    if (currency === 'usd' && currency !== this.currency) {
        newValue *= 1.2;
    }
    return new Money(newValue, currency);
}
Money.prototype.add = function add (money) {
    let newValue = this.value;
    if (money.getCurrency() === this.currency) {
        newValue += money.getValue();
    }
    else if (money.getCurrency() === 'eur' && this.currency === 'usd') {
        newValue += money.getValue() * 1.2;
    }
    else newValue += money.getValue() * 0.7;
    return new Money(newValue, this.currency);
}
Money.prototype.format = function format () {
    const currency = this.currency;
    return this.value.toLocaleString(undefined, { style: 'currency', currency: currency });
}
export default Money;
// END
