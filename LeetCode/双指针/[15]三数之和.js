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
// Related Topics 数组 双指针 排序 👍 4453 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 先排序，然后从起始点开始v后，找双数之和为-v的数据
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  // 排序避免重复性数据
  nums.sort((a, b) => a - b);

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    // 值为nums的可能性已经找过了
    if (nums[i] === nums[i - 1]) continue;
    // 开始双数之和
    let target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      // 缩短范围
      if (sum === target) {
        // 记录答案
        result.push([nums[i], nums[left], nums[right]]);
        // 改变指针
        left++;
        right--;
        // 避免重复
        while (nums[left - 1] === nums[left]) {
          left++;
        }
        while (nums[right + 1] === nums[right]) {
          right--;
        }
      }
      if (sum > target) {
        right--;
      }
      if (sum < target) {
        left++;
      }
    }
  }

  return result;
};
//leetcode submit region end(Prohibit modification and deletion)

console.log('三数之和', threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
// [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
