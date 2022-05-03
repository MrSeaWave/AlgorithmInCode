//给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
//
//
//
//
//
// 示例 1：
//
//
//输入：s = "(()"
//输出：2
//解释：最长有效括号子串是 "()"
//
//
// 示例 2：
//
//
//输入：s = ")()())"
//输出：4
//解释：最长有效括号子串是 "()()"
//
//
// 示例 3：
//
//
//输入：s = ""
//输出：0
//
//
//
//
// 提示：
//
//
// 0 <= s.length <= 3 * 10⁴
// s[i] 为 '(' 或 ')'
//
//
//
// Related Topics 栈 字符串 动态规划 👍 1783 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
// 非动归解法，https://leetcode-cn.com/problems/longest-valid-parentheses/solution/shou-hua-tu-jie-zhan-de-xiang-xi-si-lu-by-hyj8/
var longestValidParentheses = function(s) {
  let stack = [];
  let max = 0;
  // 当做参照物
  stack.push(-1);
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    // 左括号的索引，入栈
    if (cur === '(') {
      stack.push(i);
    } else {
      // 遍历到右括号,栈顶的左括号被匹配，出栈
      stack.pop();
      // 栈未空
      if (stack.length) {
        // 计算有效连续长度
        let curLen = i - stack[stack.length - 1];
        max = Math.max(max, curLen);
      } else {
        //  栈空了
        // 入栈充当参照
        stack.push(i);
      }
    }
  }

  return max;
};
//leetcode submit region end(Prohibit modification and deletion)
