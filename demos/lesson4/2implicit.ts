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

const p = new Product();
p.name = 'Shirt';
p.label = 'Hand wash only';
printLabel(p);

const q = { name: 'Pants', label: 'Dry clean only' };
printLabel(q);
