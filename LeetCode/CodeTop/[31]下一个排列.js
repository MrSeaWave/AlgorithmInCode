//整数数组的一个 排列 就是将其所有成员以序列或线性顺序排列。
//
//
// 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
//
//
// 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就
//是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
//
//
// 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
// 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
// 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
//
//
// 给你一个整数数组 nums ，找出 nums 的下一个排列。
//
// 必须 原地 修改，只允许使用额外常数空间。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,2,3]
//输出：[1,3,2]
//
//
// 示例 2：
//
//
//输入：nums = [3,2,1]
//输出：[1,2,3]
//
//
// 示例 3：
//
//
//输入：nums = [1,1,5]
//输出：[1,5,1]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100
//
// Related Topics 数组 双指针 👍 1677 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//https://leetcode-cn.com/problems/next-permutation/solution/jie-fa-hen-jian-dan-jie-shi-qi-lai-zen-yao-jiu-na-/
//如何变大：从低位挑一个大一点的数，交换前面一个小一点的数。
var nextPermutation = function(nums) {
// 1. 先倒序遍历数组, 找到第一个 (前一个数比后一个数小的位置) (即nums[i] < nums[i+1]);
// 2. 这个时候我们不能直接把后一个数nums[i+1] 跟前一个数nums[i]交换就完事了; 还应该从nums[i+1]-->数组末尾这一段的数据中 找出最优的那个值( 如何最优? 即比nums[i]稍微大那么一丢丢的数, 也就是 `nums[i+1]-->数组末尾中, 比nums[i]大的数中最小的那个值)`
// 3. 找到之后, 跟num[i]交换, 这还不算是下一个排列, num[i]后面的数值还不够小, 所以还应当进升序排列

  // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
  let i=nums.length-2
  // 寻找第一个小于右邻居的数
  while(i>=0&&nums[i]>=nums[i+1]){
    i--
  }
// 这个数如果存在，则从他后面找到一个数与他交换
  if(i>=0){
    // 从最后往左便利
    let j=nums.length-1
    // 寻找第一个大于 nums[i] 的数
    while(j>=0&&nums[j]<=nums[i]){
      j--
    }
  //  两数交换
    [nums[i],nums[j]]=[nums[j],nums[i]]
  }
      // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
  let l=i+1
  let r=nums.length-1
  // i 右边的数进行翻转，使得变大的幅度小一些
  while(l<r){
    [nums[l],nums[r]]=[nums[r],nums[l]]
    l++
    r--
  }
};
//leetcode submit region end(Prohibit modification and deletion)
