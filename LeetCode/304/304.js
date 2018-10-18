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

/*
* 思路二：记录每个重复区域的数据,原点(扩容的原点)到各个点的和， 在原矩阵上方增加一层，左侧增加一列
* */

var NumMatrix = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    this.largeMatrix = null;
    return;
  }
  this.largeMatrix = [];
  const height = matrix.length;
  const width = matrix[0].length;
  // 在原矩阵上方增加一层，左侧增加一列
  for (let i = 0; i <= height; i++) {
    this.largeMatrix[i] = new Array(width + 1).fill(0);
  }
  // largeMatrix【1，1】之后对应图中矩阵
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      this.largeMatrix[i][j] =
        matrix[i - 1][j - 1] +
        this.largeMatrix[i][j - 1] +
        this.largeMatrix[i - 1][j] -
        this.largeMatrix[i - 1][j - 1];
    }
  }
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if (this.largeMatrix === null) return;
  const r1 = row1 + 1;
  const c1 = col1 + 1;
  const r2 = row2 + 1;
  const c2 = col2 + 1;
  return (
    this.largeMatrix[r2][c2] -
    this.largeMatrix[r2][c1 - 1] -
    this.largeMatrix[r1 - 1][c2] +
    this.largeMatrix[r1 - 1][c1 - 1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
const a = [[2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]];

const ans = new NumMatrix([
  // [3, 0, 1, 4, 2],
  // [5, 6, 3, 2, 1],
  // [1, 2, 0, 1, 5],
  // [4, 1, 0, 1, 7],
  // [1, 0, 3, 0, 5]
]);
// [[[]]]
console.log('1', ans.sumRegion(2, 1, 4, 3));
console.log('2', ans.sumRegion(1, 1, 2, 2));
console.log('3', ans.sumRegion(1, 2, 2, 4));
