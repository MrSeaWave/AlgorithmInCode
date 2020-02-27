/**
 * @param {number} num
 * @return {number[]}
 */
// O(n\*sizeof(integer))
var countBits = function(num) {
  const result = [];
  for (let i = 0; i <= num; i++) {
    const value = i
      .toString(2)
      .split('')
      .reduce((sum, a) => sum + Number(a), 0);
    result.push(value);
  }
  return result;
};

const input = [2, 5];

input.forEach(i => {
  console.log('input: ', i, 'output:', countBits(i));
});
