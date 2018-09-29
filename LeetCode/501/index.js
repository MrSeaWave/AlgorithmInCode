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
const { makeTreeNode, TreeNode } = require("../utils/js/utils");

var findMode = function(root) {
  const nums = {};
  let largeTime = 0;
  const traverse = val => {
    if (val === null) return;
    traverse(val.left);
    nums[val.val] = nums[val.val] ? nums[val.val] + 1 : 1;
    largeTime = largeTime < nums[val.val] ? nums[val.val] : largeTime;
    traverse(val.right);
  };
  traverse(root);
  const ans = [];
  for (let i in nums) {
    if (nums[i] === largeTime) ans.push(parseInt(i));
  }
  return ans;
};

console.log(findMode(makeTreeNode([1, null, 2, 2])));
