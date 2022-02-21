//给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
//
//
//
// 注意：
//
//
// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。
//
//
//
//
// 示例 1：
//
//
//输入：s = "ADOBECODEBANC", t = "ABC"
//输出："BANC"
//
//
// 示例 2：
//
//
//输入：s = "a", t = "a"
//输出："a"
//
//
// 示例 3:
//
//
//输入: s = "a", t = "aa"
//输出: ""
//解释: t 中两个字符 'a' 均应包含在 s 的子串中，
//因此没有符合条件的子字符串，返回空字符串。
//
//
//
// 提示：
//
//
// 1 <= s.length, t.length <= 10⁵
// s 和 t 由英文字母组成
//
//
//
//进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？ Related Topics 哈希表 字符串 滑动窗口 👍 1652 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return '';
  const tLen = t.length - 1;
  const sLen = s.length - 1;
  let hash = {};
  for (let i = 0; i <= tLen; i++) {
    hash[t[i]] = (hash[t[i]] || 0) + 1;
  }
  // 滑块
  let slider = {};
  // 滑块 left 与 right 移动，
  // 如果right右移后不是子串，则一直右移直到满足
  // 如果right右移是子串，则开始左移left，如此一直循环
  let left = 0;
  let right = -1;
  let ans = '';
  while (left <= sLen - tLen && right <= sLen) {
    const isValid = isSameString(slider, hash);
    if (isValid) {
      const currentValidLength = right - left + 1;
      if (currentValidLength <= ans.length || !ans) {
        ans = s.slice(left, right + 1);
      }
      // 左移滑块
      slider[s[left]] = slider[s[left]] - 1;
      left++;
    } else {
      // 右移滑块
      right++;
      slider[s[right]] = (slider[s[right]] || 0) + 1;
    }
  }

  return ans;
};

function isSameString(slider, hash) {
  for (let key in hash) {
    if (hash[key] > (slider[key] || 0)) return false;
  }
  return true;
}
//leetcode submit region end(Prohibit modification and deletion)

// console.log('minWindow', minWindow('ADOBECODEBANC', 'ABC'));
