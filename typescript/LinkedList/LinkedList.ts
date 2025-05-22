export class ListNode {
    public value: any;
    public next: ListNode;

    constructor(value: any, next: ListNode) {
        this.value = value;
        this.next = next;
    }
}

export abstract class LinkedList {
    head: ListNode | undefined = undefined;
    abstract addNode(value: any): void;
    abstract findLast(): ListNode | undefined;
    length: number = 0;

    removeFirst(): void {
        if (!this.head) return;
        // We need to move the pointer forward
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = undefined;
        }
    }
}
