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
* 前序遍历首先访问根结点然后遍历左子树，最后遍历右子树
* */
const { makeTreeNode, TreeNode } = require("../utils/js/utils");
var preorderTraversal = function(root) {
  const ans = [];
  const traversalData = val => {
    if (val === null) return;
    ans.push(val.val);
    traversalData(val.left);
    traversalData(val.right);
  };
  traversalData(root);
  return ans;
};
console.log(preorderTraversal(makeTreeNode(["A", "B", "C", "D", "E", "F"])));
