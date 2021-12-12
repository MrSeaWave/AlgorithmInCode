/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { TreeNode } = require("../utils/js/utils");
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) return null;
  let max = -1;
  let index = -1;
  nums.forEach((n, i) => {
    if (n > max) {
      max = n;
      index = i;
    }
  });
  let left = nums.slice(0, index);
  let right = nums.slice(index + 1);
  const leftNode = constructMaximumBinaryTree(left);
  const rightNode = constructMaximumBinaryTree(right);
  return new TreeNode(max, leftNode, rightNode);
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
