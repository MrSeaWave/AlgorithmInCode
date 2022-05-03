//给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
//
//
//
// 示例 1：
//
//
//输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
//输出：[1,2,3,6,9,8,7,4,5]
//
//
// 示例 2：
//
//
//输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//输出：[1,2,3,4,8,12,11,10,9,5,6,7]
//
//
//
//
// 提示：
//
//
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100
//
// Related Topics 数组 矩阵 模拟 👍 1081 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// https://leetcode-cn.com/problems/spiral-matrix/solution/shou-hui-tu-jie-liang-chong-bian-li-de-ce-lue-kan-/
// https://cdn.jsdelivr.net/gh/MrSeaWave/figure-bed-profile@main/uPic/2022/eD7h9X_4WI5Ec.jpg
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  let result = [];
  //定义四个角
  // top --> bottom 是从上往下遍历
  // left --> right 是从左往右遍历
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top < bottom && left < right) {
    // 上层
    for (let i = left; i < right; i++) result.push(matrix[top][i]);
    // 右层
    for (let i = top; i < bottom; i++) result.push(matrix[i][right]);
    //  下层
    for (let i = right; i > left; i--) result.push(matrix[bottom][i]);
    //  左层
    for (let i = bottom; i > top; i--) result.push(matrix[i][left]);

    //  边界收缩，进入内层
    top++;
    right--;
    bottom--;
    left++;
  }
  //   因为是按顺时针推入结果数组的，所以
  // 剩下的一行，从左至右 依次推入结果数组
  // 剩下的一列，从上至下 依次推入结果数组
  if (top === bottom) {
    // 剩下一行，从左到右依次添加
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
  } else if (left === right) {
    // 剩下一列，从上到下依次添加
    for (let i = top; i <= bottom; i++) result.push(matrix[i][left]);
  }

  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
