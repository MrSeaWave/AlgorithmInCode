/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { makeTreeNode, TreeNode } = require('../utils/js/utils');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 累加和是计算大于等于当前值的所有元素之和
var convertBST = function(root) {
  let sum = 0;

  function traverse(root) {
    if (root === null) return;
    traverse(root.right);
    // 维护累加和
    sum += root.val;
    // 将 BST 转化成累加树
    root.val = sum;
    traverse(root.left);
  }

  traverse(root);

  return root;
};

console.log(
  convertBST(makeTreeNode([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8]))
);
