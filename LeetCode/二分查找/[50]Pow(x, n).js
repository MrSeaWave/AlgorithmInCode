//实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xⁿ ）。
//
//
//
// 示例 1：
//
//
//输入：x = 2.00000, n = 10
//输出：1024.00000
//
//
// 示例 2：
//
//
//输入：x = 2.10000, n = 3
//输出：9.26100
//
//
// 示例 3：
//
//
//输入：x = 2.00000, n = -2
//输出：0.25000
//解释：2-2 = 1/22 = 1/4 = 0.25
//
//
//
//
// 提示：
//
//
// -100.0 < x < 100.0
// -231 <= n <= 231-1
// -104 <= xⁿ <= 104
//
// Related Topics 递归 数学 👍 875 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 快速幂法 可将时间复杂度降低至 O(logn) ， “二分法”
var myPow = function (x, n) {
  if (x === 0) return 0;
  let ans = 1;
  let absN = Math.abs(n);
  while (absN) {
    if (absN % 2 !== 0) {
      ans *= x;
    }
    x *= x;
    absN = Math.floor(absN / 2);
  }

  return n < 0 ? 1 / ans : ans;
};
//leetcode submit region end(Prohibit modification and deletion)

// console.log('myPow',myPow(2,10))
