//给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,1,1], k = 2
//输出：2
//
//
// 示例 2：
//
//
//输入：nums = [1,2,3], k = 3
//输出：2
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 2 * 10⁴
// -1000 <= nums[i] <= 1000
// -10⁷ <= k <= 10⁷
//
// Related Topics 数组 哈希表 前缀和 👍 1324 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 参考 https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y/
var subarraySum = function (nums, k) {
  // prefixSum[j]−prefixSum[i−1]==k
  // 前缀和为0出现1次
  let hash = { 0: 1 };
  let prefixSum = 0;
  // 次数
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    // 前缀和
    if (hash[prefixSum - k]) {
      count += hash[prefixSum - k];
    }

    hash[prefixSum] = (hash[prefixSum] || 0) + 1;
  }

  return count;
};
//leetcode submit region end(Prohibit modification and deletion)
