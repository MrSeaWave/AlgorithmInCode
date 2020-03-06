/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function(nums, target) {
  const obj = {};
  const result = [];
  nums.forEach(num => {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  });
  nums.forEach(num => {
    const remain = target - num;
    let flag = obj[num] && obj[remain];
    if (num === remain) flag = obj[num] && obj[num] - 1;
    if (flag) {
      result.push([num, remain]);
      obj[num] -= 1;
      obj[remain] -= 1;
    }
  });
  return result;
};

const input = [
  { nums: [5, 6, 5], target: 11 },
  { nums: [5, 6, 5, 6], target: 11 },
  { nums: [-2, -1, 0, 3, 5, 6, 7, 9, 13, 14], target: 12 }
];
input.forEach(item => {
  console.log('ans:', pairSums(item.nums, item.target));
});
