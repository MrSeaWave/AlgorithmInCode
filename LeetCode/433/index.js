/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  // 判断两个单词的相似性
  const isSimilar = (a, b) => {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) diff++;
      if (diff > 1) return false;
    }
    return true;
  };
  // 创建图
  const toCreateGraph = data => {
    const result = {};
    data.forEach(item => {
      result[item] = [];
    });
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (isSimilar(data[i], data[j])) {
          result[data[i]].push(data[j]);
          result[data[j]].push(data[i]);
        }
      }
    }
    return result;
  };
  const graph = toCreateGraph([...new Set([...bank, start])]);
  let result = 0;
  let queue = [start];
  let visit = { [start]: true };
  while (queue.length) {
    let queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();
      const neighbors = graph[current];
      for (let i = 0; i < neighbors.length; i++) {
        if (!visit[neighbors[i]]) {
          queue.push(neighbors[i]);
          visit[neighbors[i]] = true;
        }
        if (neighbors[i] === end) return result + 1;
      }
    }
    result++;
  }
  return -1;
};

const input = [
  // { start: 'AACCGGTT', end: 'AACCGGTA', bank: ['AACCGGTA'] },
  // { start: 'AACCGGTT', end: 'AAACGGTA', bank: ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'] },
  // { start: 'AAAAACCC', end: 'AACCCCCC', bank: ['AAAACCCC', 'AAACCCCC', 'AACCCCCC'] }
  { start: 'AACCGGTT', end: 'AACCGGTA', bank: [] }
];

input.forEach(item => {
  const { start, end, bank } = item;
  const ans = minMutation(start, end, bank);
  console.log('ans: ', ans);
});
