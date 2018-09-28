/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const { makeTreeNode, TreeNode } = require("../utils/js/utils");
/*
* 暴力枚举
* */
var subtreeWithAllDeepest = function(root) {
  let largestDepth = 1;
  let ans = root;
  const getDepth = (val, depth) => {
    if (val === null) return depth;
    const leftDepth = getDepth(val.left, depth + 1);
    const rightDepth = getDepth(val.right, depth + 1);
    if (leftDepth === rightDepth && leftDepth >= largestDepth) {
      ans = val;
      largestDepth = leftDepth;
    }
    return leftDepth > rightDepth ? leftDepth : rightDepth;
  };
  getDepth(root, 1);
  return ans;
};

console.log(
  "subtreeWithAllDeepest",
  subtreeWithAllDeepest(
    makeTreeNode([0, 3, 1, 4, null, 2, null, null, 6, null, 5])
  )
);
// [0,1,3,null,2] --> [2]
// [0,3,1,4,null,2,null,null,6,null,5] --> [0,3,1,4,null,2,null,null,6,null,5]
