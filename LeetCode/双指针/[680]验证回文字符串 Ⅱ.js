//给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
//
//
//
// 示例 1:
//
//
//输入: s = "aba"
//输出: true
//
//
// 示例 2:
//
//
//输入: s = "abca"
//输出: true
//解释: 你可以删除c字符。
//
//
// 示例 3:
//
//
//输入: s = "abc"
//输出: false
//
//
//
// 提示:
//
//
// 1 <= s.length <= 10⁵
// s 由小写英文字母组成
//
// Related Topics 贪心 双指针 字符串 👍 459 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  // 双指针
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    // 遇到不同字符后，则进行删除，判断删除后的是否是回文字符
    if (s[left] !== s[right]) {
      return isValidPalindrome(left, right - 1) || isValidPalindrome(left + 1, right);
    }

    left++;
    right--;
  }

  function isValidPalindrome(start, end) {
    let left = start;
    let right = end;
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  return true;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log('validPalindrome', validPalindrome('deeee'));
