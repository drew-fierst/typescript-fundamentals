function identity(arg) {
    return arg;
}
var value = 42;
var result;
result = identity(value);
var test;
function logLength(arg) {
    console.log("the length is: " + arg.length);
}
test = 'Hello world';
logLength(test);
var days = ['Mon', 'Tue', 'Wed'];
logLength(days);
