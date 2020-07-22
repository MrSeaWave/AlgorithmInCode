/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let result=0;
  nums.forEach((item, index) => {
    if (item === target) result = index;
    if (target > item) result = index + 1;
  });
  return result;
};

const input = [
  { nums: [1, 3, 5, 6], target: 5 },
  { nums: [1, 3, 5, 6], target: 2 },
  { nums: [1, 3, 5, 6], target: 7 },
  { nums: [1, 3, 5, 6], target: 0 },
];

input.forEach(item => {
  const ans = searchInsert(item.nums, item.target);
  console.log('ans: ', ans);
});
