/**
 * @param {number[]} prices
 * @return {number}
 */

// 暴力
var maxProfit_1 = function (prices) {
  let ans = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let val = prices[j] - prices[i];
      if (val > ans) {
        ans = val;
      }
    }
  }

  return ans;
};

var maxProfit = function (prices) {
  if (!prices.length) return 0;
  let ans = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    ans = Math.max(ans, prices[i] - min);
  }
  return ans;
};

console.log(maxProfit([1, 7, 6, 4, 3, 1]));
