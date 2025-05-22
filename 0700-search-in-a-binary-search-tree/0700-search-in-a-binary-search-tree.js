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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    const dfsBST = node => {
        if (!node) {
            return null;
        };
        if (node.val === val) {
            return node;
        }
        // Depending on size, search left and right.
        if (val < node.val) {
            return dfsBST(node.left);
        } else {
            return dfsBST(node.right);
        }
    }
    return dfsBST(root);
};