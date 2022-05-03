//机器人在一个无限大小的 XY 网格平面上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令 commands ：
//
//
// -2 ：向左转 90 度
// -1 ：向右转 90 度
// 1 <= x <= 9 ：向前移动 x 个单位长度
//
//
// 在网格上有一些格子被视为障碍物 obstacles 。第 i 个障碍物位于网格点 obstacles[i] = (xi, yi) 。
//
// 机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，但仍然可以继续尝试进行该路线的其余部分。
//
// 返回从原点到机器人所有经过的路径点（坐标为整数）的最大欧式距离的平方。（即，如果距离为 5 ，则返回 25 ）
//
//
//
//
//
//
//
//
//
// 注意：
//
//
// 北表示 +Y 方向。
// 东表示 +X 方向。
// 南表示 -Y 方向。
// 西表示 -X 方向。
//
//
//
//
//
//
//
//
// 示例 1：
//
//
//输入：commands = [4,-1,3], obstacles = []
//输出：25
//解释：
//机器人开始位于 (0, 0)：
//1. 向北移动 4 个单位，到达 (0, 4)
//2. 右转
//3. 向东移动 3 个单位，到达 (3, 4)
//距离原点最远的是 (3, 4) ，距离为 3² + 4² = 25
//
// 示例 2：
//
//
//输入：commands = [4,-1,4,-2,4], obstacles = [[2,4]]
//输出：65
//解释：机器人开始位于 (0, 0)：
//1. 向北移动 4 个单位，到达 (0, 4)
//2. 右转
//3. 向东移动 1 个单位，然后被位于 (2, 4) 的障碍物阻挡，机器人停在 (1, 4)
//4. 左转
//5. 向北走 4 个单位，到达 (1, 8)
//距离原点最远的是 (1, 8) ，距离为 1² + 8² = 65
//
//
//
// 提示：
//
//
// 1 <= commands.length <= 10⁴
// commands[i] is one of the values in the list [-2,-1,1,2,3,4,5,6,7,8,9].
// 0 <= obstacles.length <= 10⁴
// -3 * 10⁴ <= xi, yi <= 3 * 10⁴
// 答案保证小于 2³¹
//
// Related Topics 数组 模拟 👍 163 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  // N(北方) S（南方） E（东方） W（西方）

  let obstaclesStr = obstacles.map(item => item.join('-'));
  let ans = 0;
  let direction = 'N';
  let position = [0, 0];

  function findDirection(direction, command) {
    switch (direction) {
      case 'N':
        if (command === -1) {
          return 'E';
        } else if (command === -2) {
          return 'W';
        }
      case 'S':
        if (command === -1) {
          return 'W';
        } else if (command === -2) {
          return 'E';
        }
      case 'E':
        if (command === -1) {
          return 'S';
        } else if (command === -2) {
          return 'N';
        }
      case 'W':
        if (command === -1) {
          return 'N';
        } else if (command === -2) {
          return 'S';
        }
    }
  }

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];

    if (command === -1 || command === -2) {
      direction = findDirection(direction, command);
    } else {
      if (direction === 'N') {
        let i = 0;
        while (i < command && !obstaclesStr.includes([position[0], position[1] + 1].join('-'))) {
          i++;
          position[1] += 1;
        }
      }
      if (direction === 'S') {
        let i = 0;
        while (i < command && !obstaclesStr.includes([position[0], position[1] - 1].join('-'))) {
          i++;
          position[1] -= 1;
        }
      }
      if (direction === 'E') {
        let i = 0;
        while (i < command && !obstaclesStr.includes([position[0] + 1, position[1]].join('-'))) {
          i++;
          position[0] += 1;
        }
      }
      if (direction === 'W') {
        let i = 0;
        while (i < command && !obstaclesStr.includes([position[0] - 1, position[1]].join('-'))) {
          i++;
          position[0] -= 1;
        }
      }
      ans = Math.max(ans, position[0] * position[0] + position[1] * position[1]);
    }
  }

  return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
