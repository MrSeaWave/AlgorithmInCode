/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // 修改原数据，并且记录
      nums[ans] = nums[i];
      ans++;
    }
  }
  return ans;
};

console.log(removeElement([3, 2, 2, 3], 3));
