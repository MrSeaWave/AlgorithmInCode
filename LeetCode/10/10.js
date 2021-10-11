/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/*
* 思路一：递归Recursion
* 1。 若p为空，若s也为空，返回true，反之返回false
* 2。 若p的长度为1，若s长度也为1，且相同或是p为'.'则返回true，反之返回false
* 3。 若p的第二个字符不为*，若此时s为空返回false，否则判断首字符是否匹配，且从各自的第二个字符开始调用递归函数匹配
* 4。 若p的第二个字符为*，若s不为空且字符匹配，调用递归函数匹配s和去掉前两个字符的p，若匹配返回true，否则s去掉首字母
* 5。 返回调用递归函数匹配s和去掉前两个字符的p的结果
* http://www.cnblogs.com/grandyang/p/4461713.html
* */

var isMatch1=function(s,p){

}
/*
* 简化
* */
var isMatch = function(s, p) {
  if (p.length === 0) return !s.length;
  if (p.length > 1 && p[1] === '*') {
    return (
      isMatch(s, p.substr(2)) ||
      (!(s.length === 0) && (s[0] === p[0] || p[0] === '.') && isMatch(s.substr(1), p))
    );
  } else {
    return !(s.length === 0) && (s[0] === p[0] || p[0] === '.') && isMatch(s.substr(1), p.substr(1));
  }
};

/*
* 思路二：Dp  https://leetcode.com/problems/regular-expression-matching/discuss/5684/9-lines-16ms-c-dp-solutions-with-explanations
*1.  P[i][j] = P[i - 1][j - 1], if p[j - 1] != '*' && (s[i - 1] == p[j - 1] || p[j - 1] == '.');
* 2.  P[i][j] = P[i][j - 2], if p[j - 1] == '*' and the pattern repeats for 0 times;
* 3.  P[i][j] = P[i - 1][j] && (s[i - 1] == p[j - 2] || p[j - 2] == '.'), if p[j - 1] == '*' and the pattern repeats for at least 1 times.
* */

var isMatch2 = function(s, p) {};

/*
* 思路三：Js正则表达式
* */
var isMatch3 = function(s, p) {
  var r = new RegExp('^' + p + '$');
  return r.test(s);
};
