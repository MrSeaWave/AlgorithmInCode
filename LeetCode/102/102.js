/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const { makeTreeNode, TreeNode } = require('../utils/js/utils');
var levelOrder = function(root) {
  const ans = [];
  const recursiveFun = (node, depth) => {
    if (node === null || node.val === null) return;
    ans[depth] = ans[depth] ? [...ans[depth], node.val] : [node.val];
    recursiveFun(node.left, depth + 1);
    recursiveFun(node.right, depth + 1);
  };
  recursiveFun(root, 0);
  return ans;
};
console.log(levelOrder(makeTreeNode([3, 9, 20, null, null, 15, 7])));
