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

const pet = getSmallPet();

if (pet.swim) {
	pet.swim();
} else if (pet.fly) {
	pet.fly();
}

/*
//NOTE: this syntax will work, but who want to type that all the time?!
if ((<Fish>pet).swim) {
	(<Fish>pet).swim();
} else if ((<Bird>pet).fly) {
	(<Bird>pet).fly();
}
*/