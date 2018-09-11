let product = {
	price: 4.95,
	createPriceGetter: function () {
		return () => this.price;
	}
}

let priceGetter = product.createPriceGetter();

let price = priceGetter();

console.log(`the price is ${price}`);
