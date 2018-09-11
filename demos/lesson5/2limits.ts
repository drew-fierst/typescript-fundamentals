
function identity<T>(arg: T): T {
	return arg;
}

const value: number = 42;
let result: number;

result = identity(value);

let test: string;
//test = identity(value);

function logLength<T>(arg: T) {
	console.log(`the length is: ${arg.length}`);
}


