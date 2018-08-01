/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
* 提交代码时一定要去掉多余的console，否则可能出现超时现象
* 思路：寻找一个数，当做起点，从它右边和最后一位向中间遍历，寻找数据之后而为0，且舍弃相同值
* */
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const expect = nums[left] + nums[right] + nums[i];
      if (expect === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        left += 1;
        right -= 1;
        // 为了防止重复元素
        while (nums[left] === nums[left - 1]) left += 1;
        while (nums[right] === nums[right + 1]) right -= 1;
      }
      if (expect < 0) left += 1;
      if (expect > 0) right -= 1;
    }
  }
  return ans;
};

console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));
