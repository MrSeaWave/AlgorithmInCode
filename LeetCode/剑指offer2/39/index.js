/**
 * @param {number[]} nums
 * @return {number}
 */

//  使用map，记录出现的次数
var majorityElement_1 = function (nums) {
  let map = {};
  let half = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
    if (map[nums[i]] > half) return nums[i];
  }
};

// 摩尔投票法找的其实不是众数，而是占一半以上的数。当数组没有超过一半的数，则可能返回非众数，比如[1, 1, 2, 2, 2, 3, 3]，最终返回3。

// 投票法简单来说就是不同则抵消，占半数以上的数字必然留到最后。
var majorityElement = function (nums) {
  let votes = 0;
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (!votes) {
      result = nums[i];
      votes++;
    } else {
      votes = votes + (result === nums[i] ? 1 : -1);
    }
  }

  return result;
};

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
