//给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。
//
//
//
// 示例 1：
//
//
//输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
//输出：3
//解释：长度最长的公共子数组是 [3,2,1] 。
//
//
// 示例 2：
//
//
//输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
//输出：5
//
//
//
//
// 提示：
//
//
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 100
//
// Related Topics 数组 二分查找 动态规划 滑动窗口 哈希函数 滚动哈希 👍 673 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/solution/by-cheng-ge-r-70ge/
var findLength = function(nums1, nums2) {
  // dp[i][j]=dp[i-1][j-1]+1
  // dp[i][j]表示的含义：需要是以A[i]和B[j]为末尾的子数组。
  let m = nums1.length;
  let n = nums2.length;
  // 创建m+1 n+1 的二维数组
  let dp = [...new Array(m + 1)].map(i => new Array(n + 1).fill(0));
  let max = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = 0;
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};
//leetcode submit region end(Prohibit modification and deletion)
