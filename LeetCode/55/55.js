/*
* 思路：从后方向前面遍历，每一次都相当于查询新的数组，看是否能到达当前位置
* */
const canJump = function (nums) {
    // 第一次提交测试案例nums=[0],结果为true
    const recursiveFun = (data) => {
        if (data.length === 1) return true;
        // data.length-1 最后一个位置,从倒数第二个开始找
        let sum = 1;
        for (let i = data.length - 2; i >= 1; i--) {
            if (data[i] >= sum) {
                sum = 1;
            } else sum += 1;
        }
        return data[0] >= sum;
    };
    return recursiveFun(nums);
};
// 思路一样，但是递归地狱，超出内存限制
const canJump2 = function (nums) {
    // 第一次提交测试案例nums=[0],结果为true
    const recursiveFun = (data, sum) => {
        if (data.length === 1) return true;
        const index = data.length - 1 - sum;
        const num = data[index];
        // data.length-1 最后一个位置
        if (index === 0) {
            if (num + index >= data.length - 1) return true;
            if (num + index < data.length - 1) return false;
        } else {
            if (num + index >= data.length - 1) return recursiveFun(data.slice(0, data.length - sum), 1);
            if (num + index < data.length - 1) return recursiveFun(data, sum + 1);
        }
    };
    return recursiveFun(nums, 1);
};