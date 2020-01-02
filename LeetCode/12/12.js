/**
 * @param {number} num
 * @return {string}
 */

// 构建hash表，递归查询
var intToRoman = function(num) {
  const hash = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };
  let result = '';
  const searchStr = n => {
    if (n === 0) return;
    const val = Object.keys(hash)
      .reverse()
      .find(v => n - Number(v) >= 0);
    const remainNum = n - Number(val);
    result = result + hash[val];
    searchStr(remainNum);
  };
  searchStr(num);
  return result;
};

const testData = [3, 4, 9, 58, 1994, 1986, 3994];
testData.forEach(item => {
  console.log('intToRoman ---->item', item, ' : ', intToRoman(item));
});
