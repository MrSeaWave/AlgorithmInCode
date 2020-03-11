/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  // 记录每个数字对应的次数总和
  const sum = {};
  // 记录同个数字相同的次数
  const equal = {};
  // 记录两列出现的数字次数
  const sidesA = {};
  const sidesB = {};
  // 确保数字在每一边都有
  const flagSide = {};
  A.forEach((a, i) => {
    const b = B[i];
    sum[a] = sum[a] ? sum[a] + 1 : 1;
    sum[b] = sum[b] ? sum[b] + 1 : 1;
    flagSide[a] = flagSide[a] ? flagSide[a] + 1 : 1;
    flagSide[b] = flagSide[b] ? flagSide[b] + 1 : 1;
    if (a === b) {
      equal[a] = equal[a] ? equal[a] + 1 : 1;
      flagSide[a] = flagSide[a] - 1;
    }
    sidesA[a] = sidesA[a] ? sidesA[a] + 1 : 1;
    sidesB[b] = sidesB[b] ? sidesB[b] + 1 : 1;
  });
  // 过滤出满足条件sum>=length,flagSide===length的数据
  const nums = Object.entries(sum).filter(([n, s]) => {
    return s >= A.length && flagSide[n] === A.length;
  });
  if (!nums.length) return -1;
  let result = 50000;
  nums.forEach(([n, s]) => {
    const sides = Math.max(sidesA[n] || 0, sidesB[n] || 0);
    result = Math.min(result, s - (equal[n] || 0) - sides);
  });
  return result;
};

const input = [
  { A: [2, 1, 2, 4, 2, 2], B: [5, 2, 6, 2, 3, 2] },
  { A: [3, 5, 1, 2, 3], B: [3, 6, 3, 3, 4] },
  { A: [2], B: [1] }
];

input.forEach(item => {
  console.log('ans:', minDominoRotations(item.A, item.B));
});
