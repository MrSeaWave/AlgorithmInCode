/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
// 暴力
var kClosest = function(points, K) {
  const createKey = (x, y) => `${x}_${y}`;
  const map = {};
  points.forEach(([x, y]) => {
    map[createKey(x, y)] = Math.pow(x, 2) + Math.pow(y, 2);
  });
  points.sort((a, b) => {
    const aMap = map[createKey(a[0], a[1])];
    const bMap = map[createKey(b[0], b[1])];
    return aMap - bMap;
  });
  const result = [];
  for (let i = 0; i < K; i++) {
    result.push(points[i]);
  }
  return result;
};

const input = [
  { points: [[1, 3], [-2, 2]], k: 1 },
  { points: [[3, 3], [5, -1], [-2, 4]], k: 2 }
];

input.forEach(item => {
  const ans = kClosest(item.points, item.k);
  console.log('ans: ', ans);
});
