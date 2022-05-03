//峰值元素是指其值严格大于左右相邻值的元素。
//
// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
//
// 你可以假设 nums[-1] = nums[n] = -∞ 。
//
// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,2,3,1]
//输出：2
//解释：3 是峰值元素，你的函数应该返回其索引 2。
//
// 示例 2：
//
//
//输入：nums = [1,2,1,3,5,6,4]
//输出：1 或 5
//解释：你的函数可以返回索引 1，其峰值元素为 2；
//     或者返回索引 5， 其峰值元素为 6。
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 1000
// -2³¹ <= nums[i] <= 2³¹ - 1
// 对于所有有效的 i 都有 nums[i] != nums[i + 1]
//
// Related Topics 数组 二分查找 👍 799 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n) 遍历
var findPeakElementWithN = function(nums) {
  for(let i=0;i<nums.length;i++){
    let cur=nums[i]
    let left=nums[i-1]??-Infinity
    let right=nums[i+1]??-Infinity
    if(cur>left&&cur>right){
      return i
    }
  }
};

//![](https://cdn.jsdelivr.net/gh/MrSeaWave/figure-bed-profile@main/uPic/2022/P6Dzvr_dtZoOq.jpg)
//![](https://cdn.jsdelivr.net/gh/MrSeaWave/figure-bed-profile@main/uPic/2022/b8Qu7J_9bpWoj.jpg)

// 二分查找logn
//https://leetcode-cn.com/problems/find-peak-element/solution/er-fen-cha-zhao-zui-jian-jie-yi-dong-de-cvn1f/
// https://leetcode-cn.com/problems/find-peak-element/solution/hua-jie-suan-fa-162-xun-zhao-feng-zhi-by-guanpengc/
var findPeakElement = function(nums) {
 // 只要数组中存在一个元素比相邻元素大，那么沿着它一定可以找到一个峰值
  let left=0
  let right=nums.length-1
  while(left<right){
    let  mid=left+Math.floor((right-left)/2)
    if(nums[mid]>nums[mid+1]){
      right=mid
    }else{
      left=mid+1
    }
  }

  return left
}
//leetcode submit region end(Prohibit modification and deletion)
