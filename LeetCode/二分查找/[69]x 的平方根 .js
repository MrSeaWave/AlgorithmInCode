//给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
//
// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
//
// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
//
//
//
// 示例 1：
//
//
//输入：x = 4
//输出：2
//
//
// 示例 2：
//
//
//输入：x = 8
//输出：2
//解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
//
//
//
//
// 提示：
//
//
// 0 <= x <= 2³¹ - 1
//
// Related Topics 数学 二分查找 👍 891 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  //  整数平方根一定是在0--x之间
  let left = 0;
  let right = x;
  let ans = -1;
  while (left <= right) {
    // 中间值，防止溢出,因为 (right+left) / 2 中right+left 可能会超出max_value
    let mid = left + Math.floor((right - left) / 2);

    const tem = mid * mid;
    if (tem <= x) {
      ans = mid;
      // 如果mid的平方小于x,接下来就要搜索mid+1 - right的数据了
      left = mid + 1;
    } else if (tem > x) {
      right = mid - 1;
    }
  }

  return ans
};
//leetcode submit region end(Prohibit modification and deletion)
// console.log('mySqrt',mySqrt(0))
