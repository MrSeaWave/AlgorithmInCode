/**
 * @param {number[]} nums
 * @return {number}
 */
/*
* 思路 暴力搜索
* */
var findMin = function(nums) {
  let ans = nums[0];
  for (let i = 0; i <= nums.length - 2; i++) {
    if (nums[i + 1] <= nums[i]) {
      ans = nums[i + 1];
      break;
    }
  }
  return ans;
};
console.log(findMin([3, 4, 5, 1, 2]));
