interface LabelledValue {
	label: string;
}

class Product implements LabelledValue {

	public name: string;
	public label: string;

}

function printLabel(item: LabelledValue) {
	console.log(item.label);
}

const p: Product = new Product();
p.name = 'Shirt';
p.label = 'Hand wash only';
printLabel(p);

const q = { name: 'Pants', label: 'Dry clean only' };
printLabel(q);


function logLabel(item: { label: string }) {
	console.log(`the label is: ${item.label}`);
}

logLabel(p);
logLabel(q);

//instanceof does not work for interfaces (because they are not included in compiled JavaScript)
console.log(`p is a Product: ${p instanceof Product}`);
console.log(`q is a Product: ${q instanceof Product}`);
//console.log(p instanceof LabelledValue)	//compile error!

interface Bird { fly(); layEggs(); }
interface Fish { swim(); layEggs(); }

function getSmallPet(): Fish | Bird {
	if (Math.random() < 0.5) {
		return {
			fly: function () { console.log('I am flying!'); },
			layEggs: function () { console.log('chirp chirp'); }
		};
	}
	//else
	return {
		swim: function () { console.log('I am swimming'); },
		layEggs: function () { console.log('blub blub');}
	};
	
}
function isFish(pet: Fish | Bird): pet is Fish {
	return (<Fish>pet).swim !== undefined;
}

const pet = getSmallPet();

if (isFish(pet)) {
	pet.swim();
} else {
	pet.fly();
}
