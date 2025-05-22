import { LinkedList, ListNode } from "./LinkedList";

// Linked List with no pointers, basically every list item is unknown. Also unknown length.
class PrimitiveLinkedList extends LinkedList {
    addNode(value: any): void {
        return;
    }
    findLast(): ListNode | undefined {
        return;
    }
}
