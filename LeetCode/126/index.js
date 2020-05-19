/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
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
  const graph = toCreateGraph([...new Set([...wordList, beginWord])]);

  let result = [];
  // 是否到达符合条件的层：如果该层添加的某一单词符合目标单词，则说明截止该层的所有解为最短路径，停止循环
  let flag = false;
  // 队列
  const queue = [[beginWord]];
  // 记录已经访问过的元素
  let visited = { [beginWord]: true };
  // 开始搜索数据
  while (queue.length && !flag) {
    // 该层添加的所有元素：每层必须在所有结果都添加完新的单词之后，再将这些单词统一添加到已使用单词集合
    // 如果直接添加到 visited 中，会导致该层本次结果添加之后的相同添加行为失败
    // 如：该层遇到目标单词，有两条路径都可以遇到，但是先到达的将该单词添加进 visited 中，会导致第二条路径无法添加
    const subVisited = {};

    let queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      // 获取当前路径
      const currentPath = queue.shift();
      // 获取该路径上一层的单词
      const currentWord = currentPath[currentPath.length - 1];
      const neighbors = graph[currentWord];
      for (let i = 0; i < neighbors.length; i++) {
        const pathList = [...currentPath, neighbors[i]];
        // 暂时还没有被访问过
        if (!visited[neighbors[i]]) {
          // 将该路径添加到该层队列中
          queue.push(pathList);
          // 将该单词添加到该层已访问的单词集合中
          subVisited[neighbors[i]] = true;
        }
        // 如果该单词是目标单词：将该路径添加到结果集中，查询截止到该层
        if (neighbors[i] === endWord) {
          flag = true;
          result.push(pathList);
        }
      }
    }
    // 将该层所有访问的单词添加到总的已访问集合中
    visited = { ...visited, ...subVisited };
  }
  return result;
};

const input = [
  { beginWord: 'hit', endWord: 'cog', wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'] },
  { beginWord: 'hit', endWord: 'cog', wordList: ['hot', 'dot', 'dog', 'lot', 'log'] },
  { beginWord: 'hit', endWord: 'cog', wordList: ['hit', 'dot', 'dog', 'lot', 'log'] },
  { beginWord: 'hit', endWord: 'log', wordList: ['hot', 'dot', 'dog', 'lot', 'log'] },
  { beginWord: 'a', endWord: 'c', wordList: ['a', 'b', 'c'] }
];

input.forEach(item => {
  const { beginWord, endWord, wordList } = item;
  console.log('ans: ', findLadders(beginWord, endWord, wordList));
});
