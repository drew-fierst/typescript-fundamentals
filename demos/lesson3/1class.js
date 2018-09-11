var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.toString = function () {
        return this.name + " is a " + this.species;
    };
    return Animal;
}());
var pet = new Animal();
pet.name = 'Samo';
pet.species = 'cat';
console.log(pet.toString());
