let sym1 = Symbol('sameKey');
let sym2 = Symbol('sameKey');
const myObj = {
    [sym1]: 'Hello',
    [sym2]: 'World'
};
console.log(`${myObj[sym1]} ${myObj[sym2]}`);
console.log(sym1 === sym2);
let same1 = Symbol.for('aKey');
let same2 = Symbol.for('aKey');
console.log(same1 === same2);
