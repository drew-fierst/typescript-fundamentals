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
setTimeout(function () { return myFunction(); }, 3000);
console.log("I am " + mood);
