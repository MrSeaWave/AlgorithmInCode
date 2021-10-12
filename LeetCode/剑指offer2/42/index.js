/**
 * @param {number[]} nums
 * @return {number}
 */
// dp(i)=dp(i-1)+nums(i) dp(i-1)>=0
// dp(i)=nums(i) dp(i-1)<0
var maxSubArray = function (nums) {
  let dp = [];
  dp[0] = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + (dp[i - 1] >= 0 ? dp[i - 1] : 0);
    result = Math.max(result, dp[i]);
  }
  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
