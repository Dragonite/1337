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
        const isGood = root.val >= max ? 1 : 0;
        const newMax = Math.max(max, root.val);
        const leftCount = root.left ? countGoodNodes(root.left, newMax) : 0;
        const rightCount = root.right ? countGoodNodes(root.right, newMax) : 0;
        return isGood + leftCount + rightCount;
    }
    return countGoodNodes(root);
};