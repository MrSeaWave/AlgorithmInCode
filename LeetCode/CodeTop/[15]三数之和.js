//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重
//复的三元组。
//
// 注意：答案中不可以包含重复的三元组。
//
//
//
// 示例 1：
//
//
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
//
//
// 示例 2：
//
//
//输入：nums = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：nums = [0]
//输出：[]
//
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 3000
// -10⁵ <= nums[i] <= 10⁵
//
// Related Topics 数组 双指针 排序 👍 4650 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  //  先对数组进行排序
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (cur === nums[i - 1]) continue;
    let target = -cur;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let tem = nums[left] + nums[right];
      if (tem === target) {
        result.push([cur, nums[left], nums[right]]);
        left++;
        right--;
        // 去重
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
      if (tem > target) {
        right--;
      }

      if (tem < target) {
        left++;
      }
    }
  }
  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
