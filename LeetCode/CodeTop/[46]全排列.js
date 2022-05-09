//给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,2,3]
//输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//
//
// 示例 2：
//
//
//输入：nums = [0,1]
//输出：[[0,1],[1,0]]
//
//
// 示例 3：
//
//
//输入：nums = [1]
//输出：[[1]]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同
//
// Related Topics 数组 回溯 👍 1983 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// https://leetcode-cn.com/problems/permutations-ii/solution/shou-hua-tu-jie-li-yong-yue-shu-tiao-jian-chong-fe/
var permute = function(nums) {
  let result = [];
  let used = [];

  function dfs(paths) {
    //  满足条件
    if (paths.length === nums.length) {
      result.push([...paths]);
      return;
    }

    //  枚举出所有的选择
    for (let i = 0; i < nums.length; i++) {
      // 这个数使用过了则去除
      if (used[i]) continue;

      //  选择当前的数
      paths.push(nums[i]);
      used[i] = true;
      dfs(paths);
      // 撤销选择
      paths.pop();
      used[i] = false;
    }
  }

  dfs([]);

  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
