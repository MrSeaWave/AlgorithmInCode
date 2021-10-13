/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力，超时
var reversePairs_error = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        result++;
      }
    }
  }

  return result;
};

// 归并排序 分治思想====> 两个子区间分别有序
var reversePairs = function (nums) {
  // nums[left..right] 计算逆序对个数并且排序
  function mergeSort(nums, temp, left, right) {
    // 递归终止条件
    if (left >= right) return 0;

    // mid将原数组划分成两个区间，此种写法可防止溢出
    let mid = Math.floor(left + (right - left) / 2);

    // 左右区间逆序对个数
    let leftPairs = mergeSort(nums, temp, left, mid);
    let rightParis = mergeSort(nums, temp, mid + 1, right);

    // 跨域两个子区间的逆序对个数
    let crossPairs = mergeAndCount(nums, temp, left, mid, right);

    return leftPairs + rightParis + crossPairs;
  }

  // nums[left..mid] 有序，nums[mid + 1..right] 有序，，，合并与逆序对统计
  function mergeAndCount(nums, temp, left, mid, right) {
    // 暂存数组 nums 闭区间 [i, r]内的元素至辅助数组 temp ；
    for (let i = left; i <= right; i++) {
      temp[i] = nums[i];
    }

    // 循环合并： 设置双指针 i , j 分别指向左 / 右子数组的首元素；
    let i = left;
    let j = mid + 1;

    let count = 0;

    // 当 i = m + 1 时： 代表左子数组已合并完，因此添加右子数组当前元素 temp[j] ，并执行 j = j + 1；
    // 否则，当 j = r + 1 时： 代表右子数组已合并完，因此添加左子数组当前元素 temp[i] ，并执行 i = i + 1；
    // 否则，当 temp[i] <=temp[j]时： 添加左子数组当前元素 temp[i] ，并执行 i = i + 1；
    // 否则（即 temp[i] > temp[j]）时： 添加右子数组当前元素 temp[j]，并执行 j = j + 1 ；此时构成 m - i + 1个「逆序对」，统计添加至 count ；

    for (let k = left; k <= right; k++) {
      if (i === mid + 1) {
        nums[k] = temp[j];
        j++;
      } else {
        if (j === right + 1) {
          nums[k] = temp[i];
          i++;
        } else if (temp[i] <= temp[j]) {
          nums[k] = temp[i];
          i++;
        } else {
          nums[k] = temp[j];
          j++;
          count = count + (mid - i + 1);
        }
      }
    }

    return count;
  }

  let length = nums.length;
  // 创建辅助数组
  let temp = new Array(length);
  return mergeSort(nums, temp, 0, length - 1);
};

console.log(reversePairs([7, 5, 6, 4]));
