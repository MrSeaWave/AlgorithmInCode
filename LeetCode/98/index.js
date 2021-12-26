/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const { makeTreeNode, TreeNode } = require('../utils/js/utils');

/*
* 中序遍历
* */
var isValidBST1 = function(root) {
  const getMiddleTraverse = (val, ans = []) => {
    if (val === null) return;
    getMiddleTraverse(val.left, ans);
    ans.push(val.val);
    getMiddleTraverse(val.right, ans);
    return ans;
  };
  const list = getMiddleTraverse(root) || [];
  for (let i = 0; i <= list.length - 2; i++) {
    if (list[i] >= list[i + 1]) return false;
  }
  return true;
};

var isValidBST2 = function(root) {
  // if (root === null) return true; // root=[]
  const isValid = (val, left, right) => {
    if (val === null) return true;
    if (left !== null && val.val <= left) return false;
    if (right !== null && val.val >= right) return false;
    return isValid(val.left, left, val.val) && isValid(val.right, val.val, right);
  };
  return isValid(root, null, null);
};

var isValidBST3 = function(root) {
  function isValid(root, min, max) {
    if (root === null) return true;

    if (!!min && root.val <= min.val) return false;

    if (!!max && root.val >= max.val) return false;

    return isValid(root.left, min, root) && isValid(root.right, root, max);
  }

  return isValid(root, null, null);
};
// [10,5,15,null,null,6,20]
// [0,-1]
// [5,14,null,1]
// [3,1,5,0,2,4,6]
console.log(isValidBST3(makeTreeNode([10,5,15,null,null,6,20])));
