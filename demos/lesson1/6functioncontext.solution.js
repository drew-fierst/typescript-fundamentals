var product = {
    price: 4.95,
    createPriceGetter: function () {
        var _this = this;
        return function () { return _this.price; };
    }
};
var priceGetter = product.createPriceGetter();
var price = priceGetter();
console.log("the price is " + price);
