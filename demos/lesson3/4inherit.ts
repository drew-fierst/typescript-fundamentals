class Animal {

	constructor(private name: string, private species: string) {
	}

	public toString(): string {
		return `${this.name} is a ${this.species}`;
	}

	public move(distanceInMeters: number) {
		console.log(`${this.name} moved ${distanceInMeters}m`);
	}
}

const pet: Animal = new Animal('Samo', 'cat');
console.log(pet.toString());

class Dog extends Animal {
	public greet() {
		console.log('Woof! Woof!');
	}
}

const pet2: Dog = new Dog('Rover', 'dog');
pet2.move(5);
pet2.greet();
