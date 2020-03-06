/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  const limit = !(target % 2) ? target / 2 : (target + 1) / 2;
  const result = [];
  for (let i = 1; i <= limit; i++) {
    const ans = [i];
    let start = i;
    let end = target;
    let remain = end - start;
    while (remain > 0) {
      end = remain;
      start = start + 1;
      remain = end - start;
      ans.push(start);
    }
    if (remain === 0) {
      result.push(ans);
    }
  }
  return result;
};

const input = [15,16];

input.forEach(target => {
  console.log('ans', findContinuousSequence(target));
});
