const ShoppingBasket = require('../lib/shoppingBasket');
const Candy = require('../lib/candy');

describe ('Basket.', () => {
    it('Adds Mars to the basket and returns the basket value.', () => {
      const basket1 = new ShoppingBasket();
      candy1 = new Candy('Mars', 4.99)
      basket1.addItem(candy1);

      expect(basket1.getTotalPrice()).toEqual (4.99);
    });

    it('It adds three items and returns the total basket value.', () => {
        const basket1 = new ShoppingBasket();
        candy1 = new Candy('Mars', 4.99)
        basket1.addItem(candy1);

        candy2 = new Candy('Twix', 3.99)
        basket1.addItem(candy2);

        candy3 = new Candy('Milka', 3.99)
        basket1.addItem(candy3);

        expect(basket1.getTotalPrice()).toEqual (12.97);
    });
});