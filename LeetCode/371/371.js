/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
/*
* 思路：类似第二题链表,一堆正负数判断
* */
var getSum = function(a, b) {
  const reverseData = data =>
    data
      .toString()
      .split("")
      .map(i => parseInt(i))
      .reverse();
  const a1 = reverseData(Math.abs(a));
  const b1 = reverseData(Math.abs(b));
  let minusNum = 0;
  if (a < 0) minusNum += 1;
  if (b < 0) minusNum += 1;
  let l1 = Math.abs(a) > Math.abs(b) ? a1 : b1;
  let l2 = Math.abs(a) <= Math.abs(b) ? a1 : b1;
  let carry = 0;
  let sum = [];
  while (l1.length || l2.length) {
    const l1val = l1.length !== 0 ? l1[0] : 0;
    const l2val = l2.length !== 0 ? l2[0] : 0;
    if (minusNum !== 1) {
      const val = l1val + l2val + carry;
      const remainder = val % 10;
      carry = parseInt(val / 10);
      sum.push(remainder);
    } else {
      const val = l1val - l2val + carry;
      if (val >= 0) {
        const remainder = val % 10;
        carry = 0;
        sum.push(remainder);
      } else {
        const remainder = (val + 10) % 10;
        carry = -1;
        sum.push(remainder);
      }
    }

    l1 = l1[0] !== undefined ? l1.slice(1) : [];
    l2 = l2[0] !== undefined ? l2.slice(1) : [];
  }
  sum = [...sum, carry];
  const ans = parseInt(sum.reverse().join(""));
  if (minusNum === 0) return ans;
  if (minusNum === 2) return -ans;
  if (minusNum === 1) {
    if (a < b && Math.abs(a) > Math.abs(b)) return -ans;
    if (a < b && Math.abs(a) < Math.abs(b)) return ans;
    if (a > b && Math.abs(a) > Math.abs(b)) return ans;
    if (a > b && Math.abs(a) < Math.abs(b)) return -ans;
    return ans;
  }
};

/*
* 思路二：位运算符
* */

var getSum = function(a, b) {};

console.log(getSum(-1, 1));
//[5]
