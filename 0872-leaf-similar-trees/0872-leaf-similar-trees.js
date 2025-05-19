/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const findLeaves = (root, array = []) => {
    if (root.left && root.right) {
        findLeaves(root.left, array);
        findLeaves(root.right, array);
    } else if (root.left) {
        findLeaves(root.left, array);
    } else if (root.right) {
        findLeaves(root.right, array);
    } else {
        array.push(root.val);
    }
    return array;
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leaves1 = findLeaves(root1);
    const leaves2 = findLeaves(root2);
    let isSimilar = true;
    if (leaves1.length !== leaves2.length) {
        isSimilar = false;
    } else {
        for (let i = 0; i < leaves1.length; i++) {
            if (leaves1[i] !== leaves2[i]) {
                isSimilar = false;
            }
        }
    }
    return isSimilar;
};