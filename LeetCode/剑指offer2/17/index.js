/**
 * @param {number} n
 * @return {number[]}
 */
// 暴力
var printNumbers_1 = function (n) {
  let len = Math.pow(10, n);
  return [...new Array(len)].map((_, index) => index).slice(1);
};

// 针对大数问题n，无法通过Math.pow得出的情况下，我们找到规律，知道n代表位数，然后就可以得出max值为m个'9'的组合。然后for循环。
var printNumbers = function (n) {
  let max = '';
  let result = [];
  while (n--) {
    max += '9';
  }

  let maxNum = Number(max);
  for (let i = 1; i <= maxNum; i++) {
    result.push(i);
  }
  return result;
};

console.log(printNumbers(1));
