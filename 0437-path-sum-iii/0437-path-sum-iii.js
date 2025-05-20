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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const map = new Map();
    map.set(0, 1);
    let pathCount = 0;
    const findPaths = (root, prevPrefixSum) => {
        if (!root) return;
        const currentSum = root.val + prevPrefixSum;
        // That means we have a path between.
        if (map.get(currentSum - targetSum)) {
            pathCount += map.get(currentSum - targetSum);
        }
        // Set frequency
        const existingSum = map.get(currentSum);
        if (existingSum) {
            map.set(currentSum, existingSum + 1);
        } else {
            map.set(currentSum, 1);
        }
        findPaths(root.left, currentSum);
        findPaths(root.right, currentSum);
        map.set(currentSum, map.get(currentSum) - 1);
    }

    findPaths(root, 0);

    return pathCount;
};