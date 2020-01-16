/**
 * @param {number} N
 * @return {number}
 */
// 暴力枚举 (超时)
var knightDialer = function(N) {
  // 构建4*3的棋盘
  const keypad = [[1, 1, 1], [1, 1, 1], [1, 1, 1], [0, 1, 0]];
  let result = 0;
  /**
   * keypad : 上一次的棋盘
   * coordinates:当前坐标
   * rn: 剩余步数
   * */
  const search = (keypad, coordinates, rn) => {
    const [x, y] = coordinates;
    // 超出棋盘边界
    if (x < 0 || y < 0 || x > 3 || y > 3) return false;
    // 棋盘不能立足
    if (!keypad[x][y]) return false;
    // 拔出当前的坐标，剩余的步数
    if (!rn) {
      result++;
      return true;
    }
    const nextKeypad = keypad.map(item => [...item]);
    // nextKeypad[x][y] = 0;
    // 左上
    search(nextKeypad, [x - 2, y - 1], rn - 1);
    // 左上上
    search(nextKeypad, [x - 1, y - 2], rn - 1);
    // 左下
    search(nextKeypad, [x + 1, y - 2], rn - 1);
    // 左下下
    search(nextKeypad, [x + 2, y - 1], rn - 1);
    // 右下
    search(nextKeypad, [x + 2, y + 1], rn - 1);
    // 右下下
    search(nextKeypad, [x + 1, y + 2], rn - 1);
    // 右上
    search(nextKeypad, [x - 1, y + 2], rn - 1);
    // 右上上
    search(nextKeypad, [x - 2, y + 1], rn - 1);
  };
  keypad.forEach((item, x) => {
    item.forEach((i, y) => {
      search(keypad, [x, y], N - 1);
    });
  });
  return result;
};

console.log('knightDialer', knightDialer(3));
const input = [1, 2, 3];
const output = [10, 20, 46];
input.forEach(n => console.log(knightDialer(n)));
