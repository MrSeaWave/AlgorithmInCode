/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
/*
* 思想：min(A[i],A[i+n])>B[i]，超时，58 / 67 test cases passed.
* */
var advantageCount1 = function(A, B) {
  A.sort((a, b) => a - b);
  for (let i = 0; i <= A.length - 1; i++) {
    if (A[i] <= B[i]) {
      for (let j = i + 1; j <= A.length - 1; j++) {
        if (A[j] > B[i]) {
          [A[i], A[j]] = [A[j], A[i]];
          break;
        }
      }
    }
    for (let j = i + 1; j <= A.length - 1; j++) {
      for (let k = j + 1; k <= A.length - 1; k++) {
        if (A[j] > A[k]) {
          [A[j], A[k]] = [A[k], A[j]];
        }
      }
    }
  }
  return A;
};
/*
* 简化(英文)AC 3100ms ，（中国）超时，
* */
var advantageCount2 = function(A, B) {
  for (let i = 0; i <= A.length - 1; i++) {
    // console.log('A',A)
    let minTem = Infinity;
    let minJData = Infinity;
    let minJIndex = i;
    for (let j = i; j <= A.length - 1; j++) {
      if (A[j] > B[i] && A[j] < minTem) {
        minTem = A[j];
        [A[j], A[i]] = [A[i], A[j]];
      }
      if (A[j] < minJData) {
        minJData = A[j];
        minJIndex = j;
      }
    }
    // console.log('minTem:',minTem)
    // console.log('minJData:',minJData)
    // console.log('minJIndex:',minJIndex)
    if (minTem === Infinity) {
      [A[minJIndex], A[i]] = [A[i], A[minJIndex]];
    }
  }
  return A;
};

/*
* 比较两个数组之间所谓最大值大小，A[max]>B[max]
* A[max1]>B[max1] 如果不是，给剩下A中最小值
* */
var advantageCount = function(A, B) {
  const idMaxList = B.map((v, i) => i).sort((a, b) => B[b] - B[a]);
  A.sort((a, b) => b - a);
  const ans = [];
  for (let i = 0; i < B.length; i++) {
    ans[idMaxList[i]] = A[0] > B[idMaxList[i]] ? A.shift() : A.pop();
  }
  return ans;
};

// console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11])); //[2,11,7,15]

// console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11])); // [24,32,8,12]
console.log(advantageCount([9, 1, 2, 4, 5], [6, 2, 9, 1, 4])); // [9,4,1,2,5]
