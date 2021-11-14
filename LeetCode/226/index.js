/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { makeTreeNode, TreeNode } = require("../utils/js/utils");

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root) return null;

  // root 节点需要交换它的左右子节点
  let tem=root.left
  root.left=root.right
  root.right=tem

  // 翻转左右子节点
  invertTree(root.left)
  invertTree(root.right)

  return root

};


console.log(invertTree(makeTreeNode([4,2,7,1,3,6,9])))
