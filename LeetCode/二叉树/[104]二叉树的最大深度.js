//给定一个二叉树，找出其最大深度。
//
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例：
//给定二叉树 [3,9,20,null,null,15,7]，
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
// 返回它的最大深度 3 。
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1120 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let stack = [];
  let max = -Infinity;

  function dfs(node, stack) {
    if (!node) return;

    stack.push(node.val);

    if (!node.left && !node.right) {
      max = Math.max(max, stack.length);
      // 注释或者不注释都可以
      // stack.pop();
      // return;
    }

    dfs(node.left, stack);
    dfs(node.right, stack);

    stack.pop();
  }

  dfs(root, stack);

  return max;
};
//leetcode submit region end(Prohibit modification and deletion)
