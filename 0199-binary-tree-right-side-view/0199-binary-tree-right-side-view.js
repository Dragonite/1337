/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const queue = new Queue();
    const answer = [];
    // Our queue will contain objects of type {root, level};
    // Start with just the root.
    queue.enqueue({ node: root, level: 0 });
    while (queue._elements.length) {
        const {node, level} = queue.dequeue();
        // If the index of this level does not exist in the answer, we need to add it.
        // This is handled in javascript already by empty array items, so we don't need to check index.
        answer[level] = node.val;
        // Only add new child nodes if they exist
        node.left && queue.enqueue({node: node.left, level: level + 1});
        node.right && queue.enqueue({node: node.right, level: level + 1});
    };
    return answer;
};