/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 暴力解法 (O(m*n))
var findNumberIn2DArray_1 = function (matrix, target) {
  return matrix.some((list) => {
    return list.some((v) => v === target);
  });
};

// 线性查找 O(m+n) 参考 https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/solution/mian-shi-ti-04-er-wei-shu-zu-zhong-de-cha-zhao-zuo/
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) return 0;
  let rows = matrix.length;
  let columns = matrix[0].length;
  let x = rows - 1;
  let y = 0;
  while (x >= 0 && y < columns) {
    let val = matrix[x][y];
    if (val > target) x--;
    if (val < target) y++;
    if (val === target) return true;
  }

  return false;
};

console.log(findNumberIn2DArray([[-5]], -10));
