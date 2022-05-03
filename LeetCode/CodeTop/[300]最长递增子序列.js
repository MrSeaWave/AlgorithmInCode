//给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
//
// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子
//序列。
//
//
// 示例 1：
//
//
//输入：nums = [10,9,2,5,3,7,101,18]
//输出：4
//解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
//
//
// 示例 2：
//
//
//输入：nums = [0,1,0,3,2,3]
//输出：4
//
//
// 示例 3：
//
//
//输入：nums = [7,7,7,7,7,7,7]
//输出：1
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 2500
// -10⁴ <= nums[i] <= 10⁴
//
//
//
//
// 进阶：
//
//
// 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
//
// Related Topics 数组 二分查找 动态规划 👍 2453 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动归,不是最优解 O(n^2)
// https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/by-lfool-qswg/
var lengthOfLIS = function(nums) {
  // dp[i] 表示以 nums[i] 为结尾的数组的最长递增子序列的长度
  // 定义 dp[i]， 以 nums[i] 为结尾的最长递增子序列的长度
  // 最长递增子序列最短为1，可以将 dp[i] 全部初始化为1
  let dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 说明 nums[i] 可以接到以 nums[j] 结尾的子序列上
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // 找到 dp 数组中的最大值
  let result = 0;
  for (let i = 0; i < dp.length; i++) {
    result = Math.max(result, dp[i]);
  }

  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
