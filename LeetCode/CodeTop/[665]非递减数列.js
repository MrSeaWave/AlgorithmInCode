//给你一个长度为 n 的整数数组 nums ，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
//
// 我们是这样定义一个非递减数列的： 对于数组中任意的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
//
//
//
// 示例 1:
//
//
//输入: nums = [4,2,3]
//输出: true
//解释: 你可以通过把第一个 4 变成 1 来使得它成为一个非递减数列。
//
//
// 示例 2:
//
//
//输入: nums = [4,2,1]
//输出: false
//解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
//
//
//
//
// 提示：
//
//
//
// n == nums.length
// 1 <= n <= 10⁴
// -10⁵ <= nums[i] <= 10⁵
//
// Related Topics 数组 👍 658 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  if(nums.length<=1) return true
  //  下一个元素>当前元素 递减
  function checkPossibilityAgain(nums, flag = false) {
    // 上一个的元素
    let pre = nums[0];
    for (let i = 1; i < nums.length; i++) {
      let cur = nums[i];
      if (cur < pre) {
        // 如果出现过还出现的话，不符合条件
        if (flag) return false;
        // 剔除当前 或者剔除上一个
        return (
          checkPossibilityAgain(nums.filter((_, index) => index !== i), true) ||
          checkPossibilityAgain(nums.filter((_, index) => index !== i - 1), true)
        );
      } else {
        pre = cur;
      }
    }

    return true;
  }

  return checkPossibilityAgain(nums, false);
};
//leetcode submit region end(Prohibit modification and deletion)
