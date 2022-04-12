//给你一个字符串 s，找到 s 中最长的回文子串。
//
//
//
// 示例 1：
//
//
//输入：s = "babad"
//输出："bab"
//解释："aba" 同样是符合题意的答案。
//
//
// 示例 2：
//
//
//输入：s = "cbbd"
//输出："bb"
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成
//
// Related Topics 字符串 动态规划 👍 5043 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
// 中心扩散法 https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zhong-xin-kuo-san-fa-he-dong-tai-gui-hua-by-reedfa/
var longestPalindrome = function(s) {
  //从每一个位置mid出发，向两边扩散
  //记录最长回文子串的起点
  let maxLeft = 0;
  //记录最长回文子串的终点
  let maxRight = 0;
  //记录最长回文子串的长度
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let len = 1;
    let left = i - 1;
    let right = i + 1;
    //向左侧扩展，直到超过边界或遇到与中心字符不等跳出while循环
    while (left >= 0 && s[left] === s[i]) {
      left--;
      len++;
    }
    //向右侧扩展，直到超过边界或遇到与中心字符不等跳出while循环
    while (right < s.length && s[right] === s[i]) {
      right++;
      len++;
    }
    //同时向左右两侧扩展
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
      len += 2;
    }
    if (len > maxLen) {
      maxLen = len;
      maxLeft = left;
      maxRight = right;
    }
  }
  // 当跳出循环时 left是left-1，right为right+1的
  return s.slice(maxLeft + 1, maxRight);
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(longestPalindrome("cbbd"))
