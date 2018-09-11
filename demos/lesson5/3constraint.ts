
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

