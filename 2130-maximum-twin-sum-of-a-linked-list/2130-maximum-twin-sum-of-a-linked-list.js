/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    if (!head || !head.next) {
        return head;
    }
    // Let's find the middle point of the nodes first.
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    // At this point, the slow should be starting at the second half, our original list is still head.
    // We should now reverse the second half of the list.
    let previous = null;
    let current = slow;
    let nextNode = null;
    while (current) {
        nextNode = current.next;
        current.next = previous;
        previous = current;
        current = nextNode;
    }
    // We now have a reversed second half, and just have to match.
    let max = 0;
    while (previous) {
        if ((previous.val + head.val) > max) {
            max = previous.val + head.val;
        }
        previous = previous.next;
        head = head.next;
    }
    return max;
};