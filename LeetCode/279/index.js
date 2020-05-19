/**
 * @param {number} n
 * @return {number}
 */
// 超时解法，
var numSquaresError = function(n) {
  const search = (num, depth) => {
    // 满足要求的最终节点
    if (num === 0) return depth;

    // 如果不符合条件，赐予最大值，退出
    if (num < 0) return Infinity;

    let min = Infinity;
    for (let i = Math.floor(Math.sqrt(num)); i >= 1; i--) {
      const result = search(num - i * i, depth + 1);
      min = min > result ? result : min;
    }

    return min;
  };
  return search(n, 0);
};

// 正解
var numSquares = function(n) {
  // 记录已经找过的数据值
  const map = {};
  const search = (num, depth) => {
    // 满足要求的最终节点
    if (num === 0) return depth;

    // 如果不符合条件，赐予最大值，退出
    if (num < 0) return Infinity;

    let min = Infinity;
    for (let i = Math.floor(Math.sqrt(num)); i >= 1; i--) {
      const val = num - i * i;
      const result = map[val] ? map[val] + depth + 1 : search(val, depth + 1);
      map[val] = result - (depth + 1);
      min = min > result ? result : min;
    }

    return min;
  };
  return search(n, 0);
};

const input = [12, 13, 54, 55];

input.forEach(n => console.log('ans:', numSquares(n)));
