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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let result;
  let count = 0;
  function traverse(root, k) {
    if (root === null) return;
    // 中序遍历-升序
    traverse(root.left, k);
    count++;
    // 找到第 k 小的元素
    if (count === k) {
      result = root.val;
      return;
    }
    traverse(root.right, k);
  }

  traverse(root, k);

  return result;
};

console.log(kthSmallest(makeTreeNode([5, 3, 6, 2, 4, null, null, 1]), 3));
