/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 深度优先搜索 dfs
var exist = function (board, word) {
  function dfs(board, word, i, j, index) {
    //字母索引越界或该字母board[i][j]不是对应的word[index],则返回false
    if (
      i < 0 ||
      i > board.length - 1 ||
      j < 0 ||
      j > board[0].length - 1 ||
      board[i][j] !== word[index]
    ) {
      return false;
    }

    //如果已经访问到单词的最后一个字母，则返回true
    if (index === word.length - 1) return true;

    let cur = board[i][j];
    //修改当前值,代表已经走过
    board[i][j] = '#';

    let flag =
      dfs(board, word, i + 1, j, index + 1) ||
      dfs(board, word, i - 1, j, index + 1) ||
      dfs(board, word, i, j + 1, index + 1) ||
      dfs(board, word, i, j - 1, index + 1);

    // 还原
    board[i][j] = cur;

    return flag;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, word, i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ],
    'ABCCED'
  )
);
