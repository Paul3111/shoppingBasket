class Candy {
    constructor(candy_name, price) {
        this.candy_name = candy_name;
        this.price = price;
    }

    getName() {
        return this.candy_name;
    }

    getPrice() {
        return this.price;
    }
}

module.exports = Candy;