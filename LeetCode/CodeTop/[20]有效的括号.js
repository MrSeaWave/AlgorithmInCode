//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//
// 有效字符串需满足：
//
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//
//
//
//
// 示例 1：
//
//
//输入：s = "()"
//输出：true
//
//
// 示例 2：
//
//
//输入：s = "()[]{}"
//输出：true
//
//
// 示例 3：
//
//
//输入：s = "(]"
//输出：false
//
//
// 示例 4：
//
//
//输入：s = "([)]"
//输出：false
//
//
// 示例 5：
//
//
//输入：s = "{[]}"
//输出：true
//
//
//
// 提示：
//
//
// 1 <= s.length <= 10⁴
// s 仅由括号 '()[]{}' 组成
//
// Related Topics 栈 字符串 👍 3177 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let hash = { '(': ')', '[': ']', '{': '}' };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    // 入栈
    if (cur === '(' || cur === '[' || cur === '{') {
      stack.push(cur);
    } else {
      let popStr = hash[stack.pop()];
      if (popStr !== cur) return false;
    }
  }
  // 防止栈中还有数据未清空
  return stack.length ? false : true;
};
//leetcode submit region end(Prohibit modification and deletion)
