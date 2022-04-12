//路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不
//一定经过根节点。
//
// 路径和 是路径中各节点值的总和。
//
// 给你一个二叉树的根节点 root ，返回其 最大路径和 。
//
//
//
// 示例 1：
//
//
//输入：root = [1,2,3]
//输出：6
//解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
//
// 示例 2：
//
//
//输入：root = [-10,9,20,null,null,15,7]
//输出：42
//解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
//
//
//
//
// 提示：
//
//
// 树中节点数目范围是 [1, 3 * 10⁴]
// -1000 <= Node.val <= 1000
//
// Related Topics 树 深度优先搜索 动态规划 二叉树 👍 1524 👎 0

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
// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/solution/shou-hui-tu-jie-hen-you-ya-de-yi-dao-dfsti-by-hyj8/
var maxPathSum = function(root) {
  //  当前最大路径和
  let maxSum = -Infinity;

  function dfs(root) {
    // 遍历至null节点收益为0
    if (!root) {
      return 0;
    }
    //  左子树提供的最大路径和
    let left = dfs(root.left);
    //  右子树提供的最大路径和
    let right = dfs(root.right);
    //  当前子树内部的最大路径和
    let innerMaxSum = left + root.val + right;
    //  挑战下最大记录
    maxSum = Math.max(maxSum, innerMaxSum);
    // 当前子树对外提供的最大路径和
    let outputMaxSum = root.val + Math.max(0, left, right);
    //  如果对外提供为负数，则返回0，否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  }

  dfs(root);

  return maxSum;
};
//leetcode submit region end(Prohibit modification and deletion)
