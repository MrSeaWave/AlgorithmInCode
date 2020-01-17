/**
 * @param {number} N
 * @return {number}
 */
// 小优化1，不是最优解
// TODO 再次优化可以想要获取同一个x,y,n下的x，y,n-1的数据
var knightDialer1 = function(N) {
  // 构建4*3的棋盘
  const keypad = [[1, 1, 1], [1, 1, 1], [1, 1, 1], [0, 1, 0]];
  let result = 0;
  // x-y-n 的记忆数据
  const memo = {};
  // 按题中意思需要取模
  const mod = Math.pow(10, 9) + 7;
  /**
   * keypad : 上一次的棋盘
   * coordinates:当前坐标
   * rn: 剩余步数
   * */
  const search = (keypad, coordinates, rn) => {
    const [x, y] = coordinates;
    // 超出棋盘边界
    if (x < 0 || y < 0 || x > 3 || y > 3) return 0;
    // 棋盘不能立足
    if (!keypad[x][y]) return 0;
    // 如果有计算过后的数据，则直接使用
    if (memo[`${x}-${y}-${rn}`]) return memo[`${x}-${y}-${rn}`];
    // 拔出当前的坐标，剩余的步数
    if (!rn) {
      return 1;
    }
    const nextKeypad = keypad.map(item => [...item]);
    // nextKeypad[x][y] = 0;
    // 左上
    const s1 = search(nextKeypad, [x - 2, y - 1], rn - 1);
    // 左上上
    const s2 = search(nextKeypad, [x - 1, y - 2], rn - 1);
    // 左下
    const s3 = search(nextKeypad, [x + 1, y - 2], rn - 1);
    // 左下下
    const s4 = search(nextKeypad, [x + 2, y - 1], rn - 1);
    // 右下
    const s5 = search(nextKeypad, [x + 2, y + 1], rn - 1);
    // 右下下
    const s6 = search(nextKeypad, [x + 1, y + 2], rn - 1);
    // 右上
    const s7 = search(nextKeypad, [x - 1, y + 2], rn - 1);
    // 右上上
    const s8 = search(nextKeypad, [x - 2, y + 1], rn - 1);
    const sum = (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8) % mod;
    memo[`${x}-${y}-${rn}`] = sum;
    return sum;
  };
  keypad.forEach((item, x) => {
    item.forEach((i, y) => {
      result = (result + search(keypad, [x, y], N - 1)) % mod;
    });
  });
  return result;
};

// 延续上个思路，创建号码节点
var knightDialer = function(N) {
  // 提前创建号码节点跳数关系
  const nodes = {
    0: [4, 6],
    1: [6, 8],
    2: [7, 9],
    3: [4, 8],
    4: [3, 9, 0],
    5: [],
    6: [1, 7, 0],
    7: [2, 6],
    8: [1, 3],
    9: [2, 4]
  };
  // 号码数
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 模
  const mod = Math.pow(10, 9) + 7;
  // 记忆化 num-n
  const memo = {};
  const getMod = s => s % mod;
  // num 当前号码数, rn:剩余步数
  const search = (num, rn) => {
    if (memo[`${num}-${rn}`]) return memo[`${num}-${rn}`];
    if (!rn) return 1;
    let sum = 0;
    nodes[num].forEach(node => {
      sum = getMod(sum + search(node, rn - 1));
    });
    memo[`${num}-${rn}`] = sum;
    return sum;
  };
  let result = 0;
  nums.forEach(num => {
    result = getMod(result + search(num, N - 1));
  });
  return result;
};
console.log('knightDialer', knightDialer(161));
const input = [1, 2, 3, 161, 3203];
const output = [10, 20, 46, 533302150, 6332575];
input.forEach(n => console.log(knightDialer(n)));
