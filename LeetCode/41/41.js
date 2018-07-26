/*
* 思路：从小到大排序，用set保存[0,...nums]数据，遍历数组，统计不在set的最小非负整数
* */
var firstMissingPositive = function(nums) {
  const num = [0, ...nums];
  num.sort((a, b) => a - b);
  const numsSet = new Set(num);
  for (let i of num) {
    if (i + 1 <= 0) continue;
    if (!numsSet.has(i + 1)) return i + 1;
  }
};
