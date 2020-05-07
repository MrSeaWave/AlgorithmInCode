/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * 入门级回溯算法
 * 参考题解 ： https://leetcode-cn.com/problems/generate-parentheses/solution/ru-men-ji-bie-de-hui-su-fa-xue-hui-tao-lu-miao-don/
 * */
var generateParenthesis = function(n) {
  // 向下搜索要满足两个条件：
  // 1. 插入数量不超过n
  // 2. 可以插入 ） 的前提是 ( 的数量大于 ）
  const dfs = (result, left, right, path) => {
    if (left === 0 && right === 0) {
      result.push(path);
      return;
    }
    if (left > 0) {
      dfs(result, left - 1, right, path + '(');
    }
    if (left < right) {
      dfs(result, left, right - 1, path + ')');
    }
  };
  const result = [];
  dfs(result, n, n, '');
  return result;
};

const input = [2, 3];

input.forEach(n => {
  console.log('ans:', generateParenthesis(n));
});
