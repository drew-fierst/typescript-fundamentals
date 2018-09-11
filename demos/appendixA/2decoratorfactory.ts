function color(value: string) { // this decorator factory returns a class decorator
    return function (target) { // this is the decorator
        // do something with 'target' and 'value'...
    }
}
