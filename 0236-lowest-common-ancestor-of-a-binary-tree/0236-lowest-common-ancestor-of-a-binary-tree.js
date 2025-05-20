/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const dfs = (node) => {
        if (!node) return {foundP: false, foundQ: false, lca: null};
        // This checks if the current node is p or q.
        const isCurrentP = node === p;
        const isCurrentQ = node === q;
        
        const leftResult = dfs(node.left);
        const rightResult = dfs(node.right);

        // Bubble up the answer if found.
        if (leftResult.lca) return leftResult;
        if (rightResult.lca) return rightResult;

        // We now need to populate the object with info that we know.
        const foundQ = isCurrentQ || leftResult.foundQ || rightResult.foundQ;
        const foundP = isCurrentP || leftResult.foundP || rightResult.foundP;
    
        // We now need the LCA. If we've gotten to this stage, this means bubbling hasn't happened,
        // and we just need to check if we've found Q and P. If so, we need to set the LCA to the
        // current node.
        let lca = null;
        if (foundQ && foundP) {
            if ((isCurrentP && (leftResult.foundQ || rightResult.foundQ)) || 
                (isCurrentQ && (leftResult.foundP || rightResult.foundP)) ||
                (leftResult.foundP && rightResult.foundQ) ||
                (leftResult.foundQ && rightResult.foundP)
            ) {
                lca = node;
            }
        }
        return {foundP, foundQ, lca};
    }
    const result = dfs(root);
    return result.lca;
};