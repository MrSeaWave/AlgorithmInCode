/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  let result = 0;
  function sum(n) {
    n && sum(n - 1);
    result += n;
  }

  sum(n);
  return result;
};

console.log(sumNums(9));
