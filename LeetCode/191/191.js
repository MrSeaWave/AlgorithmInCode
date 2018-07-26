/*
* 数字调用tostring方法转换成二进制
* */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let ans = 0,
    s = n.toString(2);
  for (let i in s) {
    if (s[i] === "1") ans += 1;
  }
  return ans;
};
/*
* 使用字符串的match（regexp ）方法，
* 如果regexp中有g，全局检索，
* 若没有找到任何匹配的子串，则返回 null。
* 如果找到了一个或多个匹配子串，则返回一个数组。
* 不过全局匹配返回的数组的内容与前者大不相同，
* 它的数组元素中存放的是 stringObject 中所有的匹配子串，
* 而且也没有 index 属性或 input 属性
* */
var hammingWeight2 = function(n) {
  let s = n.toString(2),
    ans = s.match(/1/g);
  return ans ? ans.length : 0;
};
console.log(hammingWeight2(11));
