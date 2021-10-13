/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  let ans = 0;
  // (此轮过后的num下标 + m) % 上轮元素个数 = 上轮num的下标
  for (let i = 2; i <= n; i++) {
    ans = (ans + m) % i;
  }

  return ans;
};

console.log(lastRemaining(5, 3));
