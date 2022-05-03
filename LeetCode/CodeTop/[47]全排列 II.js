//给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,1,2]
//输出：
//[[1,1,2],
// [1,2,1],
// [2,1,1]]
//
//
// 示例 2：
//
//
//输入：nums = [1,2,3]
//输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10
//
// Related Topics 数组 回溯 👍 1023 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// https://leetcode-cn.com/problems/permutations-ii/solution/shou-hua-tu-jie-li-yong-yue-shu-tiao-jian-chong-fe/
var permuteUnique = function(nums) {
  //  先做一次排序,有利于查重
  nums.sort((a, b) => a - b);
  let result = [];
  let used = [];

  function dfs(path) {
    // 个数选够了，结束递归
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    // 枚举出所有选择
    for (let i = 0; i < nums.length; i++) {
      // 这个数使用过了，跳过
      if (used[i]) continue;

      //  避免产生重复的排列
      if (i - 1 >= 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }
      // 选择
      path.push(nums[i]);
      // 记录路径上做过的选择
      used[i] = true;
      dfs(path);
      // 撤销选择
      used[i] = false;
      path.pop();
    }
  }

  dfs([]);
  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
