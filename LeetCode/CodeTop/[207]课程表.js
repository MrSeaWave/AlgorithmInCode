//你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
//
// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表
//示如果要学习课程 ai 则 必须 先学习课程 bi 。
//
//
// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
//
//
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
//
//
//
// 示例 1：
//
//
//输入：numCourses = 2, prerequisites = [[1,0]]
//输出：true
//解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
//
// 示例 2：
//
//
//输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
//输出：false
//解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
//
//
//
// 提示：
//
//
// 1 <= numCourses <= 10⁵
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// prerequisites[i] 中的所有课程对 互不相同
//
// Related Topics 深度优先搜索 广度优先搜索 图 拓扑排序 👍 1213 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 有向无环图(DAG),拓扑排序
// https://leetcode-cn.com/problems/course-schedule/solution/bao-mu-shi-ti-jie-shou-ba-shou-da-tong-tuo-bu-pai-/
var canFinish = function(numCourses, prerequisites) {
  // 入度数组
  const inDegree = new Array(numCourses).fill(0);
  // 邻接表：用哈希表记录依赖关系，key：课号，value：依赖这门课的后续课（数组）
  const map = {};

  for (let i = 0; i < prerequisites.length; i++) {
    //  课的初始入度值
    inDegree[prerequisites[i][0]]++;
    // 当前课不存在于邻接表，初始化
    if (!map[prerequisites[i][1]]) {
      map[prerequisites[i][1]] = [];
    }
    // 添加依赖它的后续课
    map[prerequisites[i][1]].push(prerequisites[i][0]);
  }

  // 所有入度为0的课入列
  const queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  // 选课数
  let count = 0;
  while (queue.length) {
    // 当前选的课，出列
    const selected = queue.shift();
    // 选课数+1
    count++;
    //  获取这门课的后续课
    const toEnQueue = map[selected];
    // 如果有后续课
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        //  依赖他的后续课 入度减一
        inDegree[toEnQueue[i]]--;
        // 如果因此减为0，入列
        if (inDegree[toEnQueue[i]] === 0) {
          queue.push(toEnQueue[i]);
        }
      }
    }
  }

  // 选了的课等于总课数，true，否则false
  return count === numCourses;
};
//leetcode submit region end(Prohibit modification and deletion)
