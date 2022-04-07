//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
//
//
//
// 示例 1:
//
//
//输入: s = "abcabcbb"
//输出: 3
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
//
//
// 示例 2:
//
//
//输入: s = "bbbbb"
//输出: 1
//解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
//
//
// 示例 3:
//
//
//输入: s = "pwwkew"
//输出: 3
//解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
//
//
//
//
// 提示：
//
//
// 0 <= s.length <= 5 * 10⁴
// s 由英文字母、数字、符号和空格组成
//
// Related Topics 哈希表 字符串 滑动窗口 👍 6932 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 滑块左右指针
  // 如果right右移，没有重复字符串，right 继续右移
  // 如果right右移，有重复字符串，left 左移至重复字符串后的下一位,right 继续右移
  let left = 0;
  let right = 0;
  // 记录存在指针的位置
  let hash = {};
  let slider = '';
  let maxStr = '';
  while (left <= right && right < s.length) {
    const curStr = s[right];
    const isValid = !slider.includes(curStr);
    if (isValid) {
      slider += curStr;
    } else {
      left = hash[curStr] + 1;
      slider = s.slice(left, right + 1);
    }
    hash[curStr] = right;
    right++;
    if (slider.length > maxStr.length) {
      maxStr = slider;
    }
  }
  return maxStr.length;
};
//leetcode submit region end(Prohibit modification and deletion)
// console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('pwwkew'));

// 简化版本
var lengthOfLongestSubstring_1 = function(s) {
  let maxLength = 0;
  let slider = [];
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    let index = slider.indexOf(cur);
    slider = slider.slice(index + 1);
    slider.push(cur);
    if (slider.length > maxLength) {
      maxLength = slider.length;
    }
  }
  return maxLength;
};
