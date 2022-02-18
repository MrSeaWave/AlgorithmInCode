//给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
//
// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
//
//
//
// 示例 1:
//
//
//输入: s = "cbaebabacd", p = "abc"
//输出: [0,6]
//解释:
//起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
//起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
//
//
// 示例 2:
//
//
//输入: s = "abab", p = "ab"
//输出: [0,1,2]
//解释:
//起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
//起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
//起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
//
//
//
//
// 提示:
//
//
// 1 <= s.length, p.length <= 3 * 10⁴
// s 和 p 仅包含小写字母
//
// Related Topics 哈希表 字符串 滑动窗口 👍 773 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let sLen = s.length;
  let pLen = p.length;
  if (sLen < pLen) {
    return [];
  }
  let hash = {};
  // 当前滑动的窗口
  let slide = {};
  for (let i = 0; i < pLen; i++) {
    hash[p[i]] = (hash[p[i]] || 0) + 1;
    slide[s[i]] = (slide[s[i]] || 0) + 1;
  }
  let ans = [];
  if (isAnagram(slide, hash)) {
    ans.push(0);
  }
  for (let i = p.length; i < s.length; i++) {
    // 把滑动出去的 字母 所对应的数量 -1 即可，移入的 +1。
    slide[s[i]] = (slide[s[i]] || 0) + 1;
    slide[s[i - pLen]] = slide[s[i - pLen]] - 1;
    if (isAnagram(slide, hash)) {
      ans.push(i - pLen + 1);
    }
  }
  return ans;
};

// 判断窗口是否是p的异味
function isAnagram(slide, hash) {
  return !Object.entries(slide).filter(([key, val]) => {
    return val !== 0 && val !== hash[key];
  }).length;
}
//leetcode submit region end(Prohibit modification and deletion)
// console.log(findAnagrams('cbaebabacd', 'abc'));
