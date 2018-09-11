
function identity<T>(arg: T): T {
	return arg;
}

const value: number = 42;
let result: number;

result = identity(value);

let test: string;
//test = identity(value);

interface lengthy { length: number }

function logLength<T extends lengthy>(arg: T) {
	console.log(`the length is: ${arg.length}`);
}

test = 'Hello world';
logLength(test);

const days = ['Mon', 'Tue', 'Wed'];
logLength(days);


class Queue<T> {
	private items: Array<T>;

	constructor() {
		this.items = [];
	}

	public enqueue(item: T) {
		this.items.push(item);
	}
	public dequeue(): T {
		return this.items.shift();
	}
}

const tasks = new Queue<string>();
tasks.enqueue('wash dishes');
tasks.enqueue('walk the dog');
tasks.enqueue('clean the refrigerator');
console.log(tasks.dequeue());
console.log(tasks.dequeue());



class GenericAggregator<T> {
	
	constructor(public currentValue: T, private aggregator: (x: T, y: T) => T) { }

	aggregate(x: T) {
		this.currentValue = this.aggregator(this.currentValue, x);
	}
}

const runningSum = new GenericAggregator<number>(0, (x, y) => x + y);
runningSum.aggregate(3);
runningSum.aggregate(8);
console.log(runningSum.currentValue);

const concatenator = new GenericAggregator<string>('', (x, y) => (x + ' ' + y).trim());
concatenator.aggregate('Hello');
concatenator.aggregate('World');
console.log(concatenator.currentValue);




