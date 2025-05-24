import { LinkedList, ListNode } from "./LinkedList";

// Linked List with no pointers, basically every list item is unknown. Also unknown length.
// Add node: O(n)
// find last: O(n)
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
}

// Extra tail pointer on this LinkedList
// Insertion is now constant time O(1)
// Finding last is constant time O(1)
export class TailedLinkedList extends LinkedList {
    addNode(value: any): void {
        // Create new node and use as reference for both head and tail.
        const node = new ListNode(value);
        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            // For doubly linked list. We don't actually use this in TailedLinkedList
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    findLast(): ListNode | undefined {
        return this.tail;
    }
}
