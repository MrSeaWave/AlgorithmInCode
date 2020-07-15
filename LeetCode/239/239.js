/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k === 1) return nums;
  class slideWindow {
    constructor() {
      this.data = [];
    }
    push(val) {
      // 在队尾添加元素，但是把前面比新元素小的元素都删掉：
      let data = this.data;
      while (data.length > 0 && data[data.length - 1] < val) {
        data.pop();
      }
      data.push(val);
    }
    pop(val) {
      let data = this.data;
      if (data.length > 0 && data[0] === val) {
        data.shift();
      }
    }
    max() {
      return this.data[0];
    }
  }
  let res = [];
  let windows = new slideWindow();
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      // //先填满窗口的前 k - 1
      windows.push(nums[i]);
    } else {
      // 窗口向前滑动
      windows.push(nums[i]);
      res.push(windows.max());
      windows.pop(nums[i - k + 1]);
    }
  }
  return res;
};

const input = [
  { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 },
  // { nums: [4], k: 1 },
  // { nums: [1, -1], k: 1 },
  // { nums: [7, 2, 4], k: 2 },
  // { nums: [1, 3, 1, 2, 0, 5], k: 3 }, // [3,3,2,5]
  // { nums: [9, 10, 9, -7, -4, -8, 2, -6], k: 5 }
];

input.forEach(item => {
  const ans = maxSlidingWindow(item.nums, item.k);
  console.log('ans: ', ans);
});
