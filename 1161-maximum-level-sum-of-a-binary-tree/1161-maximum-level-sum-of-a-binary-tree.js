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
var maxLevelSum = function(root) {
    const queue = new Queue();
    const levelSums = [];
    queue.enqueue({ node: root, level: 0 });
    while (queue._elements.length) {
        const { node, level } = queue.dequeue();
        if (levelSums[level] === undefined) {
            levelSums[level] = node.val;
        } else {
            levelSums[level] = levelSums[level] + node.val;
        }
        node.left && queue.enqueue({ node: node.left, level: level + 1 });
        node.right && queue.enqueue({ node: node.right, level: level + 1 });
    }
    let maxSum = -Infinity;
    let highestIndex = -1;
    for (let i = 0; i < levelSums.length; i++) {
        if (levelSums[i] > maxSum) {
            maxSum = levelSums[i];
            highestIndex = i;
        }
    }
    // Add 1 on the end to account for '1' starting index.
    return highestIndex + 1;
};