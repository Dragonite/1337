// TypeScript stack.
// Last in first out. Can use built in array methods.
class Stack {
    private list: any[] = [];

    push(element: any): void {
        this.list.push(element);
    }

    pop(): any {
        return this.list.pop();
    }

    peek(): any {
        return this.list.length > 0 ? this.list[this.list.length - 1] : undefined;
    }

    isEmpty(): boolean {
        return this.list.length > 0;
    }
}
