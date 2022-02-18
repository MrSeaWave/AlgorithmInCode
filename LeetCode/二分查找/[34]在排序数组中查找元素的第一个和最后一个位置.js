//给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
//
// 如果数组中不存在目标值 target，返回 [-1, -1]。
//
// 进阶：
//
//
// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
//
//
//
//
// 示例 1：
//
//
//输入：nums = [5,7,7,8,8,10], target = 8
//输出：[3,4]
//
// 示例 2：
//
//
//输入：nums = [5,7,7,8,8,10], target = 6
//输出：[-1,-1]
//
// 示例 3：
//
//
//输入：nums = [], target = 0
//输出：[-1,-1]
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 10⁵
// -10⁹ <= nums[i] <= 10⁹
// nums 是一个非递减数组
// -10⁹ <= target <= 10⁹
//
// Related Topics 数组 二分查找 👍 1454 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 左闭右闭
var searchRange = function (nums, target) {
  function leftSearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let ans = -1;
    // 二分法，左闭右闭，
    // 因为闭区间，所以到了left等于right时，其实区间内还有一个值要判断，
    // 所以这里<=，只有left>right的时候才能停止
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      let tem = nums[mid];
      if (tem === target) {
        ans = mid;
        right = mid - 1;
      }
      if (tem > target) {
        right = mid - 1;
      }
      if (tem < target) {
        left = left + 1;
      }
    }

    return ans;
  }

  function rightSearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let ans = -1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      let tem = nums[mid];
      if (tem === target) {
        ans = mid;
        left = mid + 1;
      }
      if (tem > target) {
        right = mid - 1;
      }
      if (tem < target) {
        left = left + 1;
      }
    }

    return ans;
  }

  return [leftSearch(nums, target), rightSearch(nums, target)];
};
//leetcode submit region end(Prohibit modification and deletion)

console.log('searchRange',searchRange([5,7,7,8,10],8))
