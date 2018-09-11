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
function logLabel(item) {
    console.log("the label is: " + item.label);
}
logLabel(p);
logLabel(q);
//instanceof does not work for interfaces (because they are not included in compiled JavaScript)
console.log("p is a Product: " + (p instanceof Product));
console.log("q is a Product: " + (q instanceof Product));
//console.log(p instanceof LabelledValue)	//compile error!
