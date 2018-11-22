/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
* 思路：深搜：,查询岛屿点的四周
* */
var maxAreaOfIsland = function(grid) {
  let ans = 0;

  const xLength = grid.length;
  if (!xLength) return 0;
  const yLength = grid[0].length;
  const isLand = (x, y) => {
    if (x >= 0 && y >= 0 && x < xLength && y < yLength && grid[x][y]) {
      grid[x][y] = 0; // 避免重复查找
      return 1 + isLand(x - 1, y) + isLand(x + 1, y) + isLand(x, y + 1) + isLand(x, y - 1);
    }
    return 0;
  };
  for (let i = 0; i <= xLength - 1; i++) {
    for (let j = 0; j <= yLength - 1; j++) {
      if (!grid[i][j]) continue;
      ans = Math.max(ans, isLand(i, j));
    }
  }
  return ans;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ])
); //6
console.log(maxAreaOfIsland([[0, 0], [1, 0]])); //1
console.log(maxAreaOfIsland([[0, 0, 0, 1, 0, 1, 1, 0]])); //2
console.log(maxAreaOfIsland([[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]])); //4
console.log(maxAreaOfIsland([[1, 1, 0], [1, 1, 0], [0, 1, 0], [0, 1, 0]])); //6
console.log(maxAreaOfIsland([[1, 1, 0], [1, 1, 1]])); //5
console.log(maxAreaOfIsland([[1, 1], [1, 0]])); //3
console.log(maxAreaOfIsland([[0, 1], [1, 1]])); //3
