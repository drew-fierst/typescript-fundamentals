class Animal {
	public name: string;
	public species: string;

	public toString(): string {
		return `${this.name} is a ${this.species}`;
	}
}

const pet: Animal = new Animal();
pet.name = 'Samo';
pet.species = 'cat';
console.log(pet.toString());
