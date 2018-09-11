
let sym1 = Symbol('aKey');
let sym2 = Symbol('aKey');

const myObj = {
	[sym1]: 'Hello',
	[sym2]: 'World'
};

console.log(`${myObj[sym1]} ${myObj[sym2]}`);

console.log(sym1 === sym2);

let same1 = Symbol.for('sameKey');
let same2 = Symbol.for('sameKey');

console.log(same1 === same2);
