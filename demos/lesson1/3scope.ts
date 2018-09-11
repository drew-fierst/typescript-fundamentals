const msg = 'Hello TypeScript World!';
let mood = 'nervous';

function myFunction() {
	let valid = true;

	console.log(msg);
	console.log('I am ' + mood);

	mood = 'happy';

	if (valid) {
		let answer = 42;
		console.log('answer = ' + answer);
	}
	//console.log('answer still = ' + answer);	//compile error - variable not in scope
}

myFunction();
console.log('I am ' + mood);

//console.log('outside function, answer = ' + answer); //compile error - variable not in scope
