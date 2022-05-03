//给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
//
// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
//
//
//
// 示例 1：
//
//
//
//
//输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
//输出：3
//解释：和等于 8 的路径有 3 条，如图所示。
//
//
// 示例 2：
//
//
//输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
//输出：3
//
//
//
//
// 提示:
//
//
// 二叉树的节点个数的范围是 [0,1000]
// -10⁹ <= Node.val <= 10⁹
// -1000 <= targetSum <= 1000
//
// Related Topics 树 深度优先搜索 二叉树 👍 1305 👎 0

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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let hash = { 0: 1 };
  let result = 0;
  function dfs(node, prefixNum) {
    if (!node) return 0;
    let sum = node.val + prefixNum;

    if (hash[sum - targetSum]) {
      result += hash[sum - targetSum];
    }
    hash[sum] = (hash[sum] || 0) + 1;
    dfs(node.left, sum);
    dfs(node.right, sum);

    hash[sum]--;
  }

  dfs(root, 0);
  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
