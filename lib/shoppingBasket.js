class ShoppingBasket {
    constructor() {
        this.basket_sum = 0;
        this.discount = 0;
    }
    items = []

    getTotalPrice() {
      this.items.forEach(item => {
        this.basket_sum += item.getPrice();
      });
      return this.basket_sum - this.discount;
    }

    addItem(item) {
        this.items.push(item);
    }

    applyDiscount(discount) {
        this.discount = discount;
    };
}

module.exports = ShoppingBasket;