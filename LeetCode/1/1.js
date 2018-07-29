/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
* 思路一：暴力搜索
* */
var twoSum1 = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

/*
* 思路二：做个映射
* */

var twoSum = function(nums, target) {
  const sums = {};
  let ans = [];
  nums.forEach((i, index) => (sums[i] = index));
  for (let i = 0; i <= nums.length - 1; i++) {
    const expect = target - nums[i];
    if (sums[expect] && sums[expect] !== i) return (ans = [i, sums[expect]]);
  }
  //return ans
};

console.log(twoSum([3,3], 6));
