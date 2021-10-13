/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr_1 = function (a) {
  let length = a.length;
  // 每个元素在左边的乘积
  let left = [];
  // 每个元素右边的乘积
  let right = [];

  //当前元素左边的所有元素乘积（不包含当前元素）
  left[0] = 1;
  for (let i = 1; i < length; i++) {
    left[i] = left[i - 1] * a[i - 1];
  }
  //当前元素右边的所有元素乘积（不包含当前元素）
  right[length - 1] = 1;
  for (let i = length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * a[i + 1];
  }

  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(left[i] * right[i]);
  }

  return result;
};

// 从上面简化--->乘积数组
var constructArr = function (a) {
  if (!a.length) return [];
  let result = [];
  let length = a.length;
  let tmp = 1;
  result[0] = 1;
  // 下三角
  for (let i = 1; i < length; i++) {
    result[i] = result[i - 1] * a[i - 1];
  }
  for (let i = length - 2; i >= 0; i--) {
    // 上三角
    tmp = tmp * a[i + 1];
    result[i] = result[i] * tmp;
  }

  return result;
};

// [1, 2, 0, 4, 5]
console.log(constructArr([1, 2, 3, 4, 5]));
