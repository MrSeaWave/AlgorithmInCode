/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function(beginWord, endWord, wordList) {
  // 判断两个单词是否相似
  const isSimilar = (a, b) => {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        diff++;
      }
      if (diff > 1) return false;
    }
    return true;
  };

  // 创建图
  const toCreateGraph = data => {
    const result = {};
    // 初始化
    data.forEach(word => {
      result[word] = [];
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
  // 构建图
  const graph = toCreateGraph([...wordList, beginWord]);

  let result = 1;
  // 队列
  const queue = [beginWord];
  // 记录已经访问过的元素
  const visit = { [beginWord]: true };

  // 开始搜索数据
  while (queue.length) {
    let queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const currentWord = queue.shift();
      const neighbors = graph[currentWord];
      for (let i = 0; i < neighbors.length; i++) {
        // 暂时还没有被访问过
        if (!visit[neighbors[i]]) {
          queue.push(neighbors[i]);
          visit[neighbors[i]] = true;
        }
        if (neighbors[i] === endWord) return result + 1;
      }
    }
    // 遍历一层 则+1
    result++;
  }
  return 0;
};

const input = [
  { beginWord: 'hit', endWord: 'cog', wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'] },
  { beginWord: 'hit', endWord: 'cog', wordList: ['hot', 'dot', 'dog', 'lot', 'log'] },
  { beginWord: 'hit', endWord: 'cog', wordList: ['hit', 'dot', 'dog', 'lot', 'log'] }
];

input.forEach(item => {
  const { beginWord, endWord, wordList } = item;
  console.log('ans: ', ladderLength(beginWord, endWord, wordList));
});
