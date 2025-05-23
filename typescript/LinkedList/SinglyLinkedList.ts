import { LinkedList, ListNode } from "./LinkedList";

// Linked List with no pointers, basically every list item is unknown. Also unknown length.
// Add node: O(n)
// find last: O(n)
// remove last: O(n)
class PrimitiveLinkedList extends LinkedList {
    addNode(value: any): void {
        if (this.head) {
            const lastNode = this.findLast();
            if (lastNode) {
                lastNode.next = new ListNode(value);
            }
        } else {
            this.head = new ListNode(value);
        }
        this.length += 1;
        return;
    }

    findLast(): ListNode | undefined {
        if (!this.head) return;
        let node: ListNode = this.head;
        while (node && node.next) {
            node = node.next;
        }
        return node;
    }

    removeLast() : ListNode | undefined {
        return this.removeAtIndex(this.length - 1);   
    }
}

const list = new PrimitiveLinkedList();
list.addNode(1);
console.log(list.length)
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
const removed = list.removeAtIndex(3);
console.log(removed)
list.print();
const added = list.addAtIndex(4, 3);
console.log(added);
list.print();
list.removeLast();
list.print();
