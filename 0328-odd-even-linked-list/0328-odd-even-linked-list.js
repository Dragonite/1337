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
var oddEvenList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let oddList = head;
    let evenList = head.next;
    const evenHead = evenList;
    while (evenList && evenList.next) {
        // Handle the next odd. Skip the even.
        oddList.next = evenList.next;
        oddList = oddList.next;
        // Handle the next even.
        evenList.next = oddList.next;
        evenList = evenList.next;
    }
    // Connect the even list to the odd.
    oddList.next = evenHead;
    return head;
};