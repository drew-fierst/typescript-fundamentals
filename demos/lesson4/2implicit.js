var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
function printLabel(item) {
    console.log(item.label);
}
var p = new Product();
p.name = 'Shirt';
p.label = 'Hand wash only';
printLabel(p);
var q = { name: 'Pants', label: 'Dry clean only' };
printLabel(q);
