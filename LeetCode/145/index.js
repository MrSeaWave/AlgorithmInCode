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
* 首先遍历左子树，然后遍历右子树，最后访问根结点
* */
const { makeTreeNode, TreeNode } = require("../utils/js/utils");
var postorderTraversal = function(root) {
  const ans = [];
  const traversalData = val => {
    if (val === null) return;
    traversalData(val.left);
    traversalData(val.right);
    ans.push(val.val);
  };
  traversalData(root);
  return ans;
};
/*
* 迭代？
* */
var postorderTraversal2 = function(root) {
  const traversalData = (val, ans = []) => {
    if (val) {
      traversalData(val.left, ans);
      traversalData(val.right, ans);
      ans.push(val.val);
    }
    return ans;
  };
  return traversalData(root, []);
};

/*
* 迭代？
* */
var postorderTraversal3 = function(root) {
  const traversalData = (val, ans = []) => {
    if (val === null) return ans;
    traversalData(val.left, ans);
    traversalData(val.right, ans);
    ans.push(val.val);
    return ans;
  };
  return traversalData(root, []);
};
console.log(postorderTraversal3(makeTreeNode(["A", "B", "C", "D", "E", "F"])));
