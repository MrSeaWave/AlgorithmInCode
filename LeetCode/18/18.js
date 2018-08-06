/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/*
* 思路：在三数之和基础上套一层循环
* */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  const ans = [];
  if (nums.length < 4) return ans;
  for (let begin = 0; begin <= nums.length - 4; begin++) {
    if(nums[begin]===nums[begin-1]) continue
    for(let next=begin+1;next<=nums.length-3;next++){
      if(nums[next]===nums[next-1]&&next-1!==begin) continue
        let left = next + 1,
            right = nums.length - 1;
        while (left < right) {
            const expect = nums[left] + nums[right] + nums[next]+nums[begin];
            if (expect === target) {
                ans.push([nums[begin],nums[next], nums[left], nums[right]]);
                left += 1;
                right -= 1;
                // 为了防止重复元素
                while (nums[left] === nums[left - 1]) left += 1;
                while (nums[right] === nums[right + 1]) right -= 1;
            }
            if (expect < target) left += 1;
            if (expect > target) right -= 1;
        }
    }
  }
  return ans
};

console.log(fourSum([0,-1,-3,-6,-9,8],4))
