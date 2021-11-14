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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 定义：将以 root 为根的树拉平为链表
var flatten = function(root) {
  if(!root) return root
  // 拉平左右链表
  flatten(root.left)
  flatten(root.right)

  // 1、左右子树已经被拉平成一条链表
  let left=root.left
  let right=root.right

  // 2、将左子树作为右子树
  root.left=null
  root.right=left;

  // 3、将原先的右子树接到当前右子树的末端
  let head=root
  while (head.right){
    head=head.right
  }

  head.right=right;

  return root
};

console.log(flatten(makeTreeNode([1,2,5,3,4,null,6])))
