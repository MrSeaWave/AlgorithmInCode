/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/*
* 中序遍历首先遍历左子树，然后访问根结点，最后遍历右子树
* */
const { makeTreeNode, TreeNode } = require("../utils/js/utils");

var inorderTraversal = function(root) {
  const ans = [];
  const getMiddleTraverse = val => {
    if (val === null) return;
    getMiddleTraverse(val.left);
    ans.push(val.val);
    getMiddleTraverse(val.right);
  };
  getMiddleTraverse(root);
  return ans;
};
console.log(inorderTraversal(makeTreeNode(["A", "B", "C", "D", "E", "F"])));
