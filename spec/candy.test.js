const Candy = require ('../lib/candy');

describe ('Candy.', () => {
    it('Returns candy name for a candy called Mars.', () => {
        const candy1 = new Candy('Mars', 4.99);
        expect(candy1.getName()).toEqual ('Mars');
    });

    it('Returns candy name for a candy called Twix.', () => {
        const candy1 = new Candy('Twix', 3.99);
        expect(candy1.getName()).toEqual ('Twix');
    });

    it('Returns candy price for a candy called Mars.', () => {
        const candy1 = new Candy('Mars', 4.99);
        expect(candy1.getPrice()).toEqual (4.99);
    });
});