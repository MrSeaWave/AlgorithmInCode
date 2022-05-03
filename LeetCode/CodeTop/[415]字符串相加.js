//给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
//
// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
//
//
//
// 示例 1：
//
//
//输入：num1 = "11", num2 = "123"
//输出："134"
//
//
// 示例 2：
//
//
//输入：num1 = "456", num2 = "77"
//输出："533"
//
//
// 示例 3：
//
//
//输入：num1 = "0", num2 = "0"
//输出："0"
//
//
//
//
//
//
// 提示：
//
//
// 1 <= num1.length, num2.length <= 10⁴
// num1 和num2 都只包含数字 0-9
// num1 和num2 都不包含任何前导零
//
// Related Topics 数学 字符串 模拟 👍 556 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let n1=num1.split("").map(val=>Number(val))
  let n2=num2.split("").map(val=>Number(val))
  let carry=0
  let result=""

  while(n1.length||n2.length){
    // 取最后的数据
    let val1=n1.splice(-1,1)[0]||0
    let val2=n2.splice(-1,1)[0]||0
    let sum=val1+val2+carry
    let val=sum % 10
    carry=Math.floor(sum/10)
    result=val+result
  }

  if(carry){
    result=carry+result
  }

  return result
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(addStrings("456","77"))
