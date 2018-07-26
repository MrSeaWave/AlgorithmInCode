/*
* 思路：用前面累加的数据之和sum与当前值比较，如果小于当前值，前面的sum无效，重新赋值为当前值
* */
const maxSubArray = function (nums) {
    if (nums.length < 1) return 0;
    let ans = nums[0],
        sum = nums[0]; // 上一堆数据的和
    for (let i = 1; i <= nums.length - 1; i++) {
        sum += nums[i];
        if (sum < nums[i]) { sum = nums[i]; }
        if (ans <= sum) {
            ans = sum;
        }
    }
    return ans;
};
console.log(maxSubArray([-2, -1]));
