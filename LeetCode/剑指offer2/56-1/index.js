/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let a = {};
  for (let i = 0; i < nums.length; i++) {
    a[nums[i]] = 1 + (a[nums[i]] || 0);
  }
  return Object.entries(a)
    .filter(([key, val]) => val === 1)
    .map(([key, val]) => Number(key));
};

console.log(singleNumbers([4, 1, 4, 6]));
