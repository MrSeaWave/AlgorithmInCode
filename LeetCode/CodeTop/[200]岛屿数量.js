//给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
//
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
//
// 此外，你可以假设该网格的四条边均被水包围。
//
//
//
// 示例 1：
//
//
//输入：grid = [
//  ["1","1","1","1","0"],
//  ["1","1","0","1","0"],
//  ["1","1","0","0","0"],
//  ["0","0","0","0","0"]
//]
//输出：1
//
//
// 示例 2：
//
//
//输入：grid = [
//  ["1","1","0","0","0"],
//  ["1","1","0","0","0"],
//  ["0","0","1","0","0"],
//  ["0","0","0","1","1"]
//]
//输出：3
//
//
//
//
// 提示：
//
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] 的值为 '0' 或 '1'
//
// Related Topics 深度优先搜索 广度优先搜索 并查集 数组 矩阵 👍 1657 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} grid
 * @return {number}
 */
// 岛屿问题通解： https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/
function dfs(grid, r, c) {
  //  判断边界条件
  if (!inArea(grid, r, c)) {
    return;
  }
  // 如果这个格子不是岛屿，直接返回
  if (grid[r][c] !== '1') {
    return;
  }
  // 将格子标记为「已遍历过」
  grid[r][c] = '2';
  // 访问上、下、左、右四个相邻结点
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

// 判断坐标 (r, c) 是否在网格中
function inArea(grid, r, c) {
  return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
}
var numIslands = function(grid) {
  // 定义岛屿数量
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      //  如果是岛屿
      if (grid[i][j] === '1') {
        //深度递归，遍历所有的陆地
        dfs(grid, i, j);
        count++;
      }
    }
  }

  return count;
};
//leetcode submit region end(Prohibit modification and deletion)
