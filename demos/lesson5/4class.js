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
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    return Queue;
}());
var tasks = new Queue();
tasks.enqueue('wash dishes');
tasks.enqueue('walk the dog');
tasks.enqueue('clean the refrigerator');
console.log(tasks.dequeue());
console.log(tasks.dequeue());
var GenericAggregator = /** @class */ (function () {
    function GenericAggregator(currentValue, aggregator) {
        this.currentValue = currentValue;
        this.aggregator = aggregator;
    }
    GenericAggregator.prototype.aggregate = function (x) {
        this.currentValue = this.aggregator(this.currentValue, x);
    };
    return GenericAggregator;
}());
var runningSum = new GenericAggregator(0, function (x, y) { return x + y; });
runningSum.aggregate(3);
runningSum.aggregate(8);
console.log(runningSum.currentValue);
var concatenator = new GenericAggregator('', function (x, y) { return (x + ' ' + y).trim(); });
concatenator.aggregate('Hello');
concatenator.aggregate('World');
console.log(concatenator.currentValue);
