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
// Related Topics 树 深度优先搜索 二叉树 👍 1232 👎 0

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
// 利用前缀和的思想
//  求解从原始起点（根节点）到当前节点 b 的路径中，有多少节点 a 满足 sum[a...b] = targetSum，
//  由于从原始起点（根节点）到当前节点的路径唯一，因此这其实是一个「一维前缀和」问题
// https://leetcode-cn.com/problems/path-sum-iii/solution/dui-qian-zhui-he-jie-fa-de-yi-dian-jie-s-dey6/

var pathSum = function (root, targetSum) {
  if (!root) return 0;
  // 前缀和出现的次数
  let hash = { 0: 1 };
  let res = 0;

  function dfsSearch(node, prefixSum) {
    if (!node) return;

    let sum = prefixSum + node.val;

    //  前缀和的思想
    if (hash[sum - targetSum]) {
      res += hash[sum - targetSum];
    }

    hash[sum] = (hash[sum] || 0) + 1;

    dfsSearch(node.left, sum);
    dfsSearch(node.right, sum);

    // 移除当前节点的个数
    hash[sum]--;
  }

  dfsSearch(root, 0);
  return res;
};

//leetcode submit region end(Prohibit modification and deletion)
