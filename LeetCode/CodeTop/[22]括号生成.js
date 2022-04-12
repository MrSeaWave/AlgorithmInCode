//数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
//
//
//
// 示例 1：
//
//
//输入：n = 3
//输出：["((()))","(()())","(())()","()(())","()()()"]
//
//
// 示例 2：
//
//
//输入：n = 1
//输出：["()"]
//
//
//
//
// 提示：
//
//
// 1 <= n <= 8
//
// Related Topics 字符串 动态规划 回溯 👍 2544 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
// 最方便理解，使用dfs，不然就使用动归，https://leetcode-cn.com/problems/generate-parentheses/solution/sui-ran-bu-shi-zui-xiu-de-dan-zhi-shao-n-0yt3/
// https://cdn.jsdelivr.net/gh/MrSeaWave/figure-bed-profile@main/uPic/2022/d4Mc2b_1612765058-NToQkc-image.png
var generateParenthesis = function(n) {
  if (n < 0) return [];
  let result = [];

  function dfs(paths, left, right) {
    if (left > n || right > left) return;
    //  括号成对出现
    if (paths.length === 2 * n) {
      result.push(paths);
      return;
    }

    dfs(paths + '(', left + 1, right);
    dfs(paths + ')', left, right + 1);
  }

  dfs('',0,0);
  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
