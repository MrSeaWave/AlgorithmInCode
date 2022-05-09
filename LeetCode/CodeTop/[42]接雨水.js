//给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
//
//
//
// 示例 1：
//
//
//
//
//输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
//输出：6
//解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
//
//
// 示例 2：
//
//
//输入：height = [4,2,0,3,2,5]
//输出：9
//
//
//
//
// 提示：
//
//
// n == height.length
// 1 <= n <= 2 * 10⁴
// 0 <= height[i] <= 10⁵
//
// Related Topics 栈 数组 双指针 动态规划 单调栈 👍 3402 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} height
 * @return {number}
 */
// https://cdn.jsdelivr.net/gh/MrSeaWave/figure-bed-profile@main/uPic/2022/UYdVwD_Nr7aoG.png
// 从两边向中间收缩，左边找符合左高右低的数据，组成雨水统计，右边找符合右高左低的数据，不符合的话就换个方向继续寻找
// https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode/327718/
var trap = function(height) {
  // 定理一：在某个位置i处，它能存的水，取决于它左右两边的最大值中较小的一个。
  //
  // 定理二：当我们从左往右处理到left下标时，左边的最大值left_max对它而言是可信的，但right_max对它而言是不可信的。（见下图，由于中间状况未知，对于left下标而言，right_max未必就是它右边最大的值）
  //
  // 定理三：当我们从右往左处理到right下标时，右边的最大值right_max对它而言是可信的，但left_max对它而言是不可信的。
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;
  while (left <= right) {
    // 如果left_max<right_max成立，那么它就知道自己能存多少水了。无论右边将来会不会出现更大的right_max，都不影响这个结果
    if (leftMax < rightMax) {
      result += Math.max(0, leftMax - height[left]);
      leftMax = Math.max(leftMax, height[left]);
      left++;
    } else {
      result += Math.max(0, rightMax - height[right]);
      rightMax = Math.max(rightMax, height[right]);
      right--;
    }
  }

  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
