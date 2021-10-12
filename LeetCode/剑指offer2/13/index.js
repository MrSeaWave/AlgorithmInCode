/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  // 记录访问过的数组位置
  let visited = {};

  function dfs(i, j, k) {
    //当前方格坐标不符合条件或者方格已经访问过，则返回0
    if (xySum(i, j) > k || i >= m || j >= n || visited[`${i}_${j}`]) {
      return 0;
    }
    visited[`${i}_${j}`] = true;

    //只需要向下或者向右
    return 1 + dfs(i + 1, j, k) + dfs(i, j + 1, k);
  }

  // 索引下标求和
  function xySum(i, j) {
    return `${i}${j}`.split('').reduce((s, a) => s + Number(a), 0);
  }
  return dfs(0, 0, k);
};

console.log(movingCount(2, 3, 1));
// [
//   [0, 1, 2],
//   [1, 2, 3]
// ];
