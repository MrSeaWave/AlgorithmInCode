/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange_1 = function (nums) {
  let oddNumber = [];
  let evenNumber = [];

  nums.forEach((item) => {
    if (item % 2 === 0) {
      evenNumber.push(item);
    } else {
      oddNumber.push(item);
    }
  });
  return [...oddNumber, ...evenNumber];
};

var exchange = function (nums) {
  let result = [];
  nums.forEach((item) => {
    if (item % 2 === 0) {
      result.push(item);
    } else {
      result.unshift(item);
    }
  });

  return result;
};
console.log(exchange([1, 2, 3, 4]));
