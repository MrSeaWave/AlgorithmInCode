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

  // nums[left..mid] 有序，nums[mid + 1..right] 有序
  function mergeAndCount(nums, temp, left, mid, right) {
    // 拷贝至辅助数组中
    for (let i = left; i <= right; i++) {
      temp[i] = nums[i];
    }

    let i = left;
    let j = mid + 1;

    let count = 0;
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
