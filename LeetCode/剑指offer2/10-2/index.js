/**
 * @param {number} n
 * @return {number}
 */
// 动归 f(n)=f(n−1)+f(n−2)
var numWays_1 = function (n) {
  let fn_1 = 1;
  let fn_2 = 1;
  for (let i = 0; i < n; i++) {
    let sum = (fn_1 + fn_2) % 1000000007;
    fn_1 = fn_2;
    fn_2 = sum;
  }

  return fn_1;
};
// 动归 f(n)=f(n−1)+f(n−2)
var numWays = function (n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n];
};

console.log(numWays(7));
