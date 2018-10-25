/**
 * @param {number[]} A
 * @return {boolean}
 */

/*
* 思路：暴力模拟，，，，（超时）---
* */
var isIdealPermutation1 = function(A) {
  let globalData = 0;
  let localeData = 0;
  const length = A.length - 1;
  for (let i = 0; i <= length; i++) {
    for (let j = i + 1; j <= length; j++) {
      if (A[i] > A[j]) {
        if (j === i + 1) localeData += 1;
        globalData += 1;
      }
    }
  }
  console.log(globalData, localeData);
  return globalData === localeData;
};
/*
* 思路二：数学：当前数据的与index的偏移量
* */
var isIdealPermutation = function(A) {
  const length = A.length - 1;
  for (let i = 0; i <= length; i++) {
    if (Math.abs(A[i] - i) > 1) return false;
  }
  return true;
};

console.log(isIdealPermutation([1,2,0]));
