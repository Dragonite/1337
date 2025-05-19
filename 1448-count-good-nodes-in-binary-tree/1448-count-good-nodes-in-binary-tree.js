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
var goodNodes = function(root) {
    const countGoodNodes = (root, max = root.val) => {
        if (!root) return 0;
        const leftCount = root.left ? countGoodNodes(root.left, Math.max(max, root.left.val)) : 0;
        const rightCount = root.right ? countGoodNodes(root.right, Math.max(max, root.right.val)) : 0;
        if (root.val >= max) {
            return 1 + leftCount + rightCount;
        } else {
            return leftCount + rightCount;
        }
    }
    return countGoodNodes(root);
};