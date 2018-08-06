/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
* 思路：向三数之和解法一样，细心一点
* */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  // console.log('nums',nums)
  let ans = -Infinity;
  const getMinData = (ans, value) => {
    // console.log("aaa", ans, value);
    if (Math.abs(target - ans) > Math.abs(target - value)) return value;
    return ans;
  };
  for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      // console.log("left", [nums[i], nums[left], nums[right]]);
      const expect = nums[i] + nums[left] + nums[right];
      ans = getMinData(ans, expect);
      // console.log("right", ans);
      if (ans === target) {
        return ans// break;
      }
      if (expect < target) left += 1;
      if (expect > target) right -= 1;
      while (nums[left] === nums[left - 1]&&left-1!==i) left += 1;
      while (nums[right] === nums[right + 1]) right -= 1;
    }
  }
  return ans;
};

console.log(threeSumClosest([1,1,-1,-1,3], -1));
