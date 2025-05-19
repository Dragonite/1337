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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = [];
    const findPaths = (node, sum, currentPath) => {
        // Handle base case/null
        if (!node) return;
        // Add current step to the path
        currentPath.push(node.val);
        // Check for leaf/end of the path
        if (!node.left && !node.right && sum === node.val) {
            // Add a copy of the array, otherwise might be adding references.
            result.push([...currentPath]);
        }
        // Check each side
        findPaths(node.left, sum - node.val, currentPath);
        findPaths(node.right, sum - node.val, currentPath);
        // Backtrack here
        currentPath.pop();
    }
    findPaths(root, targetSum, []);
    return result;
};