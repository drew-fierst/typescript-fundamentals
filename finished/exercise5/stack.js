var Stack = /** @class */ (function () {
    function Stack() {
        this._elements = [];
    }
    Stack.prototype.push = function (element) {
        this._elements.push(element);
    };
    Stack.prototype.pop = function () {
        return this._elements.pop();
    };
    Stack.prototype.getSize = function () {
        return this._elements.length;
    };
    Stack.prototype.toString = function () {
        return this._elements.reverse().join();
    };
    return Stack;
}());
var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
//s.push("Tim");
console.log(s.toString());
