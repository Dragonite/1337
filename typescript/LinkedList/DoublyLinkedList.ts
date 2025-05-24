import { ListNode } from "./LinkedList";
import { TailedLinkedList } from "./SinglyLinkedList";

class DoublyLinkedList extends TailedLinkedList {
    // O(1) constant time complexity. We only move the pointer of the tail to indicate a node's removal.
    override removeLast(): ListNode | undefined {
        if (!this.head || !this.tail) {
            return;
        }
        const currentTail = this.tail;
        const previous = currentTail.prev;
        if (previous) {
            this.tail = previous;
            this.tail.next = undefined;
        } else {
            // At this point, you only have 1 element, and you have to update both the head and the tail.
            this.head = undefined;
            this.tail = undefined;
        }
        return currentTail;
    }
}
