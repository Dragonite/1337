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
 * @return {number}
 */
var longestZigZag = function(root) {
    let maxPathLength = 0;
    const traverseTree = (node, direction, currentLength) => {
        if (!node) return;
        maxPathLength = Math.max(currentLength, maxPathLength);
        if (direction === 'left') {
            traverseTree(node.left, 'right', currentLength + 1);
            traverseTree(node.right, 'left', 1);
        } else {
            traverseTree(node.right, 'left', currentLength + 1);
            traverseTree(node.left, 'right', 1);
        }
    }
    traverseTree(root, 'left', 0);
    return maxPathLength;
};