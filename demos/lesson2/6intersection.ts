
interface P { name: string };
interface Q { price: number };
type PQ = P & Q;

let myObj: PQ = {
	name: 'sprocket',
	price: 4.95
};

console.log(myObj);
