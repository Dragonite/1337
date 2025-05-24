import { ListNode } from "./LinkedList/LinkedList";
import { TailedLinkedList } from "./LinkedList/SinglyLinkedList";

class Queue extends TailedLinkedList {
    enqueue(value: any) {
        this.addNode(value);
        return this.tail;
    }

    dequeue(): ListNode | undefined {
        return this.removeFirst();
    }

    peek(): ListNode | undefined {
        return this.head;
    }
}
