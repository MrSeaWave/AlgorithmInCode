/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
* 思路：暴力搜索
* */
var subsets = function(nums) {
  const ans = [];
  nums.forEach(i => {
    ans.forEach(a => {
      ans.push([...a, i]);
    });
    ans.push([i]);
  });
  ans.push([]);
  return ans;
};
console.log("subsets", subsets([1, 2, 3]));
