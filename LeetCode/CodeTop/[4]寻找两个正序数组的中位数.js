//给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
//
// 算法的时间复杂度应该为 O(log (m+n)) 。
//
//
//
// 示例 1：
//
//
//输入：nums1 = [1,3], nums2 = [2]
//输出：2.00000
//解释：合并数组 = [1,2,3] ，中位数 2
//
//
// 示例 2：
//
//
//输入：nums1 = [1,2], nums2 = [3,4]
//输出：2.50000
//解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
//
//
//
//
//
//
// 提示：
//
//
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -10⁶ <= nums1[i], nums2[i] <= 10⁶
//
// Related Topics 数组 二分查找 分治 👍 5308 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 普通排序方法，时间复杂度与sort有关，如果要追求log(m+n)那么还是看看题解吧
var findMedianSortedArrays = function(nums1, nums2) {
  let list = [...nums1, ...nums2];
  list.sort((a, b) => a - b);
  if (list.length % 2 === 0) {
    let right = list.length / 2;
    let left = right - 1;
    return list[left] + (list[right] - list[left]) / 2;
  } else {
    return list[Math.floor(list.length / 2)];
  }
};
//leetcode submit region end(Prohibit modification and deletion)
