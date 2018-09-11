class Animal {

	constructor(private name: string, private species: string) {
	}

	public toString(): string {
		return `${this.name} is a ${this.species}`;
	}
}

const pet: Animal = new Animal('Samo', 'cat');
console.log(pet.toString());
