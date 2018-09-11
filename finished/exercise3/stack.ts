class Stack {
    protected _elements: number[] = [];
    public push(element: number): void {
        this._elements.push(element);
    }
    public pop(): number {
        return this._elements.pop();
    }
    public getSize(): number {
        return this._elements.length;
    }
    public toString(): string {
        return this._elements.reverse().join();
    }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.toString());
