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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST_1 = function(root, val) {
  let result = null;
  function traverse(root) {
    if (root === null) return;

    if (root.val === val) {
      result = root;
      return;
    }
    traverse(root.left);
    if (root.val > val) {
      return;
    }
    traverse(root.right);
  }

  traverse(root);

  return result;
};

// 优化一点
var searchBST = function(root, val) {
  if (root === null) return null;
  // 去左子树进行寻找
  if (root.val > val) {
    return searchBST(root.left, val);
  }
  // 去右子树寻找
  if (root.val < val) {
    return searchBST(root.right, val);
  }
  return root;
};

console.log(searchBST(makeTreeNode([4, 2, 7, 1, 3]), 2));
