/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return nums
    .sort((a, b) => {
      // 若拼接字符串 a + b > b + a，则 a “大于” b ；
      // 反之，若 a + b < b + a ，则 a “小于” b ；
      let v1 = `${a}${b}`;
      let v2 = `${b}${a}`;
      return v1 - v2;
      // if (v1 > v2) return 1;
      // if (v1 < v2) return -1;
      // return 0;
    })
    .join('');
};

console.log(minNumber([3, 30, 34, 5, 9]));
