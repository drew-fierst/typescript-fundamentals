class Animal {
	private name: string;
	private species: string;

	constructor(name: string, species: string) {
		this.name = name;
		this.species = species;
	}

	public toString(): string {
		return `${this.name} is a ${this.species}`;
	}
}

const pet: Animal = new Animal('Samo', 'cat');
console.log(pet.toString());
