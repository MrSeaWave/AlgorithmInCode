/**
 * @param {number[][]} matrix
 */

/*
* 思路一：纯模拟
* */
var NumMatrix1 = function(matrix) {
  this.val = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix1.prototype.sumRegion = function(row1, col1, row2, col2) {
  let ans = 0;
  const data = this.val;
  while (row1 <= row2) {
    for (let i = col1; i <= col2; i++) ans += data[row1][i];
    row1++;
  }
  return ans;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const a = [[2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]];

const ans = new NumMatrix1([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]);

console.log('1', ans.sumRegion(2, 1, 4, 3));
console.log('2', ans.sumRegion(1, 1, 2, 2));
console.log('3', ans.sumRegion(1, 2, 2, 4));
