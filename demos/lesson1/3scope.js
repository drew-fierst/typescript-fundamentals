var msg = 'Hello TypeScript World!';
var mood = 'nervous';
function myFunction() {
    var valid = true;
    console.log(msg);
    console.log('I am ' + mood);
    mood = 'happy';
    if (valid) {
        var answer = 42;
        console.log('answer = ' + answer);
    }
    //console.log('answer still = ' + answer);	//compile error - variable not in scope
}
myFunction();
console.log('I am ' + mood);
//console.log('outside function, answer = ' + answer); //compile error - variable not in scope
