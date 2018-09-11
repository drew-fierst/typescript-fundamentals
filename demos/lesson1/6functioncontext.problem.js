var product = {
    price: 4.95,
    createPriceGetter: function () {
        return function () {
            return this.price;
        };
    }
};
var priceGetter = product.createPriceGetter();
var price = priceGetter();
console.log("the price is " + price);
