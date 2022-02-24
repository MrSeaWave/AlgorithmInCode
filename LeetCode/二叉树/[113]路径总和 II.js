//给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
//
// 叶子节点 是指没有子节点的节点。
//
//
//
//
//
// 示例 1：
//
//
//输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
//输出：[[5,4,11,2],[5,8,4,5]]
//
//
// 示例 2：
//
//
//输入：root = [1,2,3], targetSum = 5
//输出：[]
//
//
// 示例 3：
//
//
//输入：root = [1,2], targetSum = 0
//输出：[]
//
//
//
//
// 提示：
//
//
// 树中节点总数在范围 [0, 5000] 内
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000
//
//
//
// Related Topics 树 深度优先搜索 回溯 二叉树 👍 674 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// const { makeTreeNode } = require('../../../../utils/js/utils');
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];
  let res = [];
  let stack = [];

  dfsSearch(root, targetSum, stack, res);

  return res;
};

function dfsSearch(node, target, stack, path) {
  if (!node) return;
  stack.push(node.val);

  if (!node.left && !node.right && !(target - node.val)) {
    const rows = [];
    stack.forEach((val) => rows.push(val));
    path.push(rows);
    // 将当前的递归节点移除
    stack.pop();
    return;
  }

  dfsSearch(node.left, target - node.val, stack, path);
  dfsSearch(node.right, target - node.val, stack, path);

  stack.pop();
}
//leetcode submit region end(Prohibit modification and deletion)
// console.log(
//   'pathSum',
//   pathSum(makeTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)
// );
