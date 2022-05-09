//给定一个含有 n 个正整数的数组和一个正整数 target 。
//
// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长
//度。如果不存在符合条件的子数组，返回 0 。
//
//
//
// 示例 1：
//
//
//输入：target = 7, nums = [2,3,1,2,4,3]
//输出：2
//解释：子数组 [4,3] 是该条件下的长度最小的子数组。
//
//
// 示例 2：
//
//
//输入：target = 4, nums = [1,4,4]
//输出：1
//
//
// 示例 3：
//
//
//输入：target = 11, nums = [1,1,1,1,1,1,1,1]
//输出：0
//
//
//
//
// 提示：
//
//
// 1 <= target <= 10⁹
// 1 <= nums.length <= 10⁵
// 1 <= nums[i] <= 10⁵
//
//
//
//
// 进阶：
//
//
// 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
//
// Related Topics 数组 二分查找 前缀和 滑动窗口 👍 1122 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  //  滑动窗口
  let slider = [];
  let left = 0;
  let right = -1;
  let minSlider = [];

  while (left < nums.length && right < nums.length) {
    let sum = slider.reduce((s, a) => s + a, 0);
    // 如果当前的窗口之和不大于target,则继续扩大窗口，right右移
    if (sum < target) {
      right++;
      let val = nums[right];
      slider.push(val);
    } else {
      //  取出最小窗口
      if (!minSlider.length || slider.length < minSlider.length) {
        minSlider = [...slider];
      }
      //  缩减窗口
      left--;
      slider.shift();
    }
  }

  return minSlider.length;
};
//leetcode submit region end(Prohibit modification and deletion)
