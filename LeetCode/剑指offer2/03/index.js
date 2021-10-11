/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  return nums.find((v, i) => {
    const li = nums.lastIndexOf(v);
    return li !== i;
  });
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
