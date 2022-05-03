//给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的
// 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
//
// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。
//
// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。
//
//
//
// 示例 1：
//
//
//输入：candidates = [2,3,6,7], target = 7
//输出：[[2,2,3],[7]]
//解释：
//2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
//7 也是一个候选， 7 = 7 。
//仅有这两种组合。
//
// 示例 2：
//
//
//输入: candidates = [2,3,5], target = 8
//输出: [[2,2,2,2],[2,3,3],[3,5]]
//
// 示例 3：
//
//
//输入: candidates = [2], target = 1
//输出: []
//
//
//
//
// 提示：
//
//
// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 200
// candidate 中的每个元素都 互不相同
// 1 <= target <= 500
//
// Related Topics 数组 回溯 👍 1897 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// ![image.png](https://cdn.jsdelivr.net/gh/MrSeaWave/figure-bed-profile@main/uPic/2022/VwE0aa_1599606793-laurLe-image.png)
// dfs，https://leetcode-cn.com/problems/combination-sum/solution/shou-hua-tu-jie-zu-he-zong-he-combination-sum-by-x/
var combinationSum = function(candidates, target) {
  let result = [];

  // start是当前选择的起点索引 temp 是当前的集合 sum是当前求和
  function dfs(start, temp, sum) {
    if (sum >= target) {
      if (sum === target) {
        result.push([...temp]);
      }
      // 结束递归
      return;
    }

    // 从start开始，枚举当前可选的数，（剪枝重复组合,下次就不会选到start左边的数
    for (let i = start; i < candidates.length; i++) {
      // 选这个数
      temp.push(candidates[i]);
      // 基于此，继续选择，传i，下次就不会选到i左边的数
      dfs(i, temp, sum + candidates[i]);
      // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
      temp.pop();
    }
  }

  dfs(0, [], 0);

  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
