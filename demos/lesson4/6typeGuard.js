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
function getSmallPet() {
    if (Math.random() < 0.5) {
        return {
            fly: function () { console.log('I am flying!'); },
            layEggs: function () { console.log('chirp chirp'); }
        };
    }
    //else
    return {
        swim: function () { console.log('I am swimming'); },
        layEggs: function () { console.log('blub blub'); }
    };
}
function isFish(pet) {
    return pet.swim !== undefined;
}
var pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
