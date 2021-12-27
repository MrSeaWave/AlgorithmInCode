//给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
//
//
//
// 示例 1：
//
//
//输入：n = 3
//输出：5
//
//
// 示例 2：
//
//
//输入：n = 1
//输出：1
//
//
//
//
// 提示：
//
//
// 1 <= n <= 19
//
// Related Topics 树 二叉搜索树 数学 动态规划 二叉树 👍 1456 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */

// 暴力 ：			Time Limit Exceeded
var numTrees_1 = function(n) {

  // 计算闭区间[low,high]的个数
  function count(low, high) {
    if (low > high) return 1;

    let sum = 0;
    for (let i = low; i <= high; i++) {
      const left = count(low, i - 1);
      const right = count(i + 1, high);
      sum = sum + left * right;
    }

    return sum;
  }

  // 计算闭区间 [1,n]的BST个数
  return count(1, n);
};

var numTrees = function(n) {

  let hashMap = {};

  // 计算闭区间[low,high]的个数
  function count(low, high) {
    if (low > high) return 1;

    if (hashMap[`${low}_${high}`]) {
      return hashMap[`${low}_${high}`];
    }

    let sum = 0;
    for (let i = low; i <= high; i++) {
      // i 的值作为根节点 root
      const left = count(low, i - 1);
      const right = count(i + 1, high);
      // 左右子树的组合数乘积是 BST 的总数
      sum = sum + left * right;
    }

    hashMap[`${low}_${high}`] = sum;

    return sum;
  }

  // 计算闭区间 [1,n]的BST个数
  return count(1, n);
};

console.log(numTrees(18));
