/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
* 思路一：排序
* */
var moveZeroes1 = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        // const tem = nums[i];
        // nums[i] = nums[j];
        // nums[j] = tem;
      }
    }
  }
  // console.log(nums);
};

/*
* 思路二：类似27，记录原数据为0次数并且修改原数据，之后用0覆盖
* */

var moveZeroes = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count += 1;
    }
  }
  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log(nums);
};

moveZeroes([0,1,0,3,12]);
