interface Printable {
    toString(): string;
}

class Stack<T> {
    protected _elements: T[] = [];
    public push(element: T): void {
        this._elements.push(element);
    }
    public pop(): T {
        return this._elements.pop();
    }
    public getSize(): number {
        return this._elements.length;
    }
    public toString(): string {
        return this._elements.reverse().join();
    }
}

let s = new Stack<number>();
s.push(1);
s.push(2);
s.push(3);
//s.push("Tim");
console.log(s.toString());