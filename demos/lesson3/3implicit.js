var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    Animal.prototype.toString = function () {
        return this.name + " is a " + this.species;
    };
    return Animal;
}());
var pet = new Animal('Samo', 'cat');
console.log(pet.toString());
