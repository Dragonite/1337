/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    let middleNode = head;
    let fasterNode = head;
    let previousNode = null;
    while (fasterNode && fasterNode.next) {
        previousNode = middleNode;
        middleNode = middleNode.next;
        fasterNode = fasterNode.next.next;
    }
    previousNode.next = middleNode.next;
    return head;
};