class ShoppingBasket {
    constructor() {
        this.basket_sum = 0
    }
    items = []

    getTotalPrice() {
      this.items.forEach(item => {
        this.basket_sum += item.getPrice();
      });
      return this.basket_sum;
    }

    addItem(item) {
        this.items.push(item);
    }
}

module.exports = ShoppingBasket;