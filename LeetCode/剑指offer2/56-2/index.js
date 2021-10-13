/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = {};
  nums.forEach((item) => {
    map[item] = 1 + (map[item] || 0);
  });
  return Object.entries(map).find(([key, val]) => val == 1)[0];
};

console.log(singleNumber([3, 4, 3, 3]));
