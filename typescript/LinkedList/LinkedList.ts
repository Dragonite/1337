export class ListNode {
    public value: any;
    public next: ListNode | undefined;
    public prev: ListNode | undefined;

    constructor(value: any, next: ListNode | undefined = undefined, prev: ListNode | undefined = undefined) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

export abstract class LinkedList {
    head: ListNode | undefined;
    tail: ListNode | undefined;
    abstract addNode(value: any): void;
    abstract findLast(): ListNode | undefined;
    length: number = 0;

    removeFirst(): ListNode | undefined {
        if (!this.head) return;
        const existingHead = this.head;
        // We need to move the pointer forward
        if (existingHead.next) {
            this.head = existingHead.next;
            return existingHead;
        } else {
            this.head = undefined;
            return;
        }
    }

    removeLast() : ListNode | undefined {
        return this.removeAtIndex(this.length - 1);   
    }

    removeAtIndex(targetIndex: number): ListNode | undefined {
        // Checking for index out of range, or no list.
        if (targetIndex < 0 || targetIndex > this.length - 1 || !this.head) {
            return;
        }
        // If it's index 0, looking for the first item , we should remove first and return it.
        if (targetIndex === 0) {
            return this.removeFirst();
        }
        // Indexes should now be valid. Removal means detach from previous index, attach to next index.
        let prevNode: ListNode | undefined;
        let currentNode: ListNode | undefined = this.head;
        let index = 0;
        // We only need the previous node.
        while (index < targetIndex && currentNode) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            index += 1;
        }
        if (prevNode && currentNode) {
            prevNode.next = currentNode.next;
        }
        return currentNode;
    }

    addAtIndex(value: any, targetIndex: number): ListNode | undefined {
        if (targetIndex < 0 || targetIndex > this.length - 1) {
            return;
        }
        if (!this.head) {
            if (targetIndex === 0) {
                this.head = new ListNode(value);
                return;
            } else {
                return;
            }
        } else {
            // There is an existing head.
            let prevNode: ListNode | undefined;
            let currentNode: ListNode | undefined = this.head;
            let index = 0;
            // We only need the previous node.
            while (index < targetIndex && currentNode) {
                prevNode = currentNode;
                currentNode = currentNode.next;
                index += 1;
            }
            if (prevNode && currentNode) {
                const newNode = new ListNode(value);
                prevNode.next = newNode;
                newNode.next = currentNode;
                return newNode;
            }
            return;
        }
    }

    print(): void {
        if (!this.head) {
            console.log([]);
        } else {
            const listAsArray: any[] = [];
            let node: ListNode | undefined = this.head;
            while (node) {
                listAsArray.push(node.value);
                node = node.next;
            }
            console.log(listAsArray);
        }
    }
}
