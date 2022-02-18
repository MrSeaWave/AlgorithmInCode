//给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否
//则返回 -1。
//
//
//示例 1:
//
// 输入: nums = [-1,0,3,5,9,12], target = 9
//输出: 4
//解释: 9 出现在 nums 中并且下标为 4
//
//
// 示例 2:
//
// 输入: nums = [-1,0,3,5,9,12], target = 2
//输出: -1
//解释: 2 不存在 nums 中因此返回 -1
//
//
//
//
// 提示：
//
//
// 你可以假设 nums 中的所有元素是不重复的。
// n 将在 [1, 10000]之间。
// nums 的每个元素都将在 [-9999, 9999]之间。
//
// Related Topics 数组 二分查找 👍 645 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 左闭右闭
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // 二分法，左闭右闭，
  // 因为闭区间，所以到了left等于right时，其实区间内还有一个值要判断，
  // 所以这里<=，只有left>right的时候才能停止
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let tem = nums[mid];
    if (tem < target) {
      left = mid + 1;
    }
    if (tem === target) {
      return mid;
    }
    if (tem > target) {
      right = mid - 1;
    }
  }

  return -1;
};

// //  左闭右开
// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length;
//   // 二分法，左闭右开
//   while (left < right) {
//     let mid = left + Math.floor((right - left) / 2);
//     let tem = nums[mid];
//     if (tem < target) {
//       left = mid + 1;
//     }
//     if (tem === target) {
//       return mid;
//     }
//     if (tem > target) {
//       right = mid;
//     }
//   }
//
//   return -1;
// };
//leetcode submit region end(Prohibit modification and deletion)
