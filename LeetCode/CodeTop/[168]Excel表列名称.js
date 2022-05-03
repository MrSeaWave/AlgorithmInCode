//给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
//
// 例如：
//
//
//A -> 1
//B -> 2
//C -> 3
//...
//Z -> 26
//AA -> 27
//AB -> 28
//...
//
//
//
//
// 示例 1：
//
//
//输入：columnNumber = 1
//输出："A"
//
//
// 示例 2：
//
//
//输入：columnNumber = 28
//输出："AB"
//
//
// 示例 3：
//
//
//输入：columnNumber = 701
//输出："ZY"
//
//
// 示例 4：
//
//
//输入：columnNumber = 2147483647
//输出："FXSHRXW"
//
//
//
//
// 提示：
//
//
// 1 <= columnNumber <= 2³¹ - 1
//
// Related Topics 数学 字符串 👍 520 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  // prettier-ignore
  let saveLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let result = '';

  while (columnNumber) {
    // 因为A位于0位置，所以需要减一位
    let mod = (columnNumber - 1) % 26;
    result = saveLet[mod] + result;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
