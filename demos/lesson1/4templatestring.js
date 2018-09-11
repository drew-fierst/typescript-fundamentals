var msg = 'Hello TypeScript World!';
var mood = 'nervous';
function myFunction() {
    var valid = true;
    console.log(msg);
    console.log("I am " + mood);
    mood = 'happy';
    if (valid) {
        var answer = 42;
        console.log("answer = " + answer);
    }
}
myFunction();
console.log("I am " + mood);
