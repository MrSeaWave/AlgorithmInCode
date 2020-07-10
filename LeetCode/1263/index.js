/**
 * @param {character[][]} grid
 * @return {number}
 */
// https://blog.csdn.net/qq_17550379/article/details/103157542
var minPushBox = function(grid) {
  // 推箱子的过程中，包括人的移动和箱子的移动两个部分
  // 判断箱子是否可达（由于是最短路问题，所以这里通过bfs）
  // 判断人是不是可以到达箱子的后面去推它（通过bfs或dfs处理，这里使用bfs）
  const rowLength = grid.length;
  const columnLength = grid[0].length;
  const direction = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  // 记录T,B,S的位置
  let T = [],
    B = [],
    S = [];
  grid.forEach((item, x) => {
    item.forEach((val, y) => {
      if (val === 'T') T = [x, y];
      if (val === 'B') B = [x, y];
      if (val === 'S') S = [x, y];
    });
  });

  // 检查所属位置的合法性
  const check = (x, y) => {
    return x >= 0 && x < rowLength && y >= 0 && y < columnLength && grid[x][y] !== '#';
  };

  const peopleVisitKey = (sx, sy) => `${sx}-${sy}`;
  // 人可以移动的位置
  // e:人移动的目标位置,b:箱子，s:人
  const canMoveTo = (e, b, s) => {
    const q = [s];
    const visit = { [peopleVisitKey(s[0], s[1])]: true };
    while (q.length) {
      const pre = q.shift();
      if (pre[0] === e[0] && pre[1] === e[1]) return true;
      // 人开始移动
      for (let i of direction) {
        const nx = pre[0] + i[0];
        const ny = pre[1] + i[1];
        if (check(nx, ny) && (nx !== b[0] || ny !== b[1]) && !visit[peopleVisitKey(nx, ny)]) {
          q.push([nx, ny]);
          visit[peopleVisitKey(nx, ny)] = true;
        }
      }
    }
    return false;
  };

  // 箱子与人的标记key
  const visitKey = (bx, by, sx, sy) => `${bx},${by},${sx},${sy}`;

  let result = 0;
  let q = [[B[0], B[1], S[0], S[1]]];
  const visit = { [visitKey(B[0], B[1], S[0], S[1])]: true };
  while (q.length) {
    let n = q.length;
    while (n--) {
      let pre = q.shift();
      if (pre[0] === T[0] && pre[1] === T[1]) return result;
      for (let i of direction) {
        const nx = pre[0] + i[0];
        const ny = pre[1] + i[1];
        const end = [pre[0] - i[0], pre[1] - i[1]];
        const b = [pre[0], pre[1]];
        const s = [pre[2], pre[3]];
        if (
          check(nx, ny) &&
          check(end[0], end[1]) &&
          canMoveTo(end, b, s) &&
          !visit[visitKey(nx, ny, pre[0], pre[1])]
        ) {
          q.push([nx, ny, pre[0], pre[1]]);
          visit[visitKey(nx, ny, pre[0], pre[1])] = true;
        }
      }
    }
    result++;
  }
  return -1;
};

const input = [
  {
    grid: [
      ['#', '#', '#', '#', '#', '#'],
      ['#', 'T', '#', '#', '#', '#'],
      ['#', '.', '.', 'B', '.', '#'],
      ['#', '.', '#', '#', '.', '#'],
      ['#', '.', '.', '.', 'S', '#'],
      ['#', '#', '#', '#', '#', '#']
    ]
  },
  {
    grid: [
      ['#', '#', '#', '#', '#', '#'],
      ['#', 'T', '#', '#', '#', '#'],
      ['#', '.', '.', 'B', '.', '#'],
      ['#', '#', '#', '#', '.', '#'],
      ['#', '.', '.', '.', 'S', '#'],
      ['#', '#', '#', '#', '#', '#']
    ]
  },
  {
    grid: [
      ['#', '#', '#', '#', '#', '#'],
      ['#', 'T', '.', '.', '#', '#'],
      ['#', '.', '#', 'B', '.', '#'],
      ['#', '.', '.', '.', '.', '#'],
      ['#', '.', '.', '.', 'S', '#'],
      ['#', '#', '#', '#', '#', '#']
    ]
  }
];

input.forEach(item => {
  const ans = minPushBox(item.grid);
  console.log('ans: ', ans);
});
