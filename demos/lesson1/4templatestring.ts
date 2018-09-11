const msg = 'Hello TypeScript World!';
let mood = 'nervous';

function myFunction() {
	let valid = true;

	console.log(msg);
	console.log(`I am ${mood}`);

	mood = 'happy';

	if (valid) {
		let answer = 42;
		console.log(`answer = ${answer}`);
	}
}

myFunction();
console.log(`I am ${mood}`);

