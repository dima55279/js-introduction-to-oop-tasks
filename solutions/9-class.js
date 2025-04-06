import _ from 'lodash';

// BEGIN
class Cart {
    constructor() {
        this.items = [];
    }
    addItem (item, count) {
        const product = {item: item, count: count}
        return this.items.push(product);
    };
    getItems () {
        return _.cloneDeep(this.items);
    };
    getCost () {
        let sum = 0;
        this.items.forEach(product => {
            sum += product.item.price * product.count;
        });
        return sum;
    };
    getCount () {
        let counter = 0;
        this.items.forEach(product => {
            counter += product.count;
        });
        return counter;
    };
}
export default Cart;
// END
