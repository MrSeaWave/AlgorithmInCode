//以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返
//回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
//
//
//
// 示例 1：
//
//
//输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
//输出：[[1,6],[8,10],[15,18]]
//解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
//
//
// 示例 2：
//
//
//输入：intervals = [[1,4],[4,5]]
//输出：[[1,5]]
//解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
//
//
//
// 提示：
//
//
// 1 <= intervals.length <= 10⁴
// intervals[i].length == 2
// 0 <= starti <= endi <= 10⁴
//
// Related Topics 数组 排序 👍 1426 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
  // 涂色区域,[[1,4],[5,6]]
  let list = [];

  for (let i = 0; i < intervals.length; i++) {
    for (let j = intervals[i][0]; j <= intervals[i][1]; j++) {
      // 如果区域被覆盖则会被重新覆盖
      if (list[j]!=="X" && j === intervals[i][1]) {
        list[j] = 'END';
      } else {
        // 上色
        list[j] = 'X';
      }
    }
  }
// console.log('list',list)
  let result = [];
  let rows = [];
  for (let i = 0; i < list.length; i++) {
    let cur = list[i];
    if (!cur) {
      if (rows.length) {
        result.push([rows[0],rows[rows.length-1]]);
        rows = [];
      }
    }
    if (list[i] === 'X') {
      // 记录位置
      rows.push(i);
    }
    if (list[i] === 'END') {
      rows.push(i);
      result.push([rows[0],rows[rows.length-1]]);
      rows = [];
    }
  }
  if (rows.length) {
    result.push([rows[0],rows[rows.length-1]]);
  }

  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
// console.log(merge([[2,3],[5,5],[2,2],[3,4],[3,4]]))
// console.log(merge([[1,4],[5,6]]))
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
