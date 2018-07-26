/*
* 思路一，从中间最大值向两边找相对找最大值，然后统计最大值与相对最大值之间包裹住的雨水，以此类推，向两边延伸，直到第一个或最后一个停止
* */
var trap = function(height) {
    let sum = 0;
    const findMaxValue = (begin, end, data) => {
        let maxNum = { value: 0, index: -1 };
        const xuqiushu = [];
        for (let i = begin; i < end; i++) {
            if (maxNum.value <= data[i]) maxNum = { value: data[i], index: i };
            xuqiushu.push(data[i]);
        }
        return maxNum;
    };

    const leftMaxHeight = (begin, end) => {
        const leftMaxNum = findMaxValue(begin, end, height);
        if (leftMaxNum.index === -1) return;
        for (let i = leftMaxNum.index; i < end; i++) {
            sum += leftMaxNum.value - height[i];
        }
        leftMaxHeight(0, leftMaxNum.index, leftMaxNum);
    };
    const rightMaxHeight = (begin, end) => {
        const rightMaxNum = findMaxValue(begin, end, height);
        if (rightMaxNum.index === -1) return;
        for (let i = begin; i <= rightMaxNum.index; i++) {
            sum += rightMaxNum.value - height[i];
        }
        rightMaxHeight(rightMaxNum.index + 1, height.length, rightMaxNum);
    };
    const maxNum = findMaxValue(0, height.length, height);
    leftMaxHeight(0, maxNum.index);
    rightMaxHeight(maxNum.index + 1, height.length);
    return sum;
};

/*
* 思路二：从两边向中间收缩，左边找符合左高右低的数据，组成雨水统计，右边找符合右高左低的数据，不符合的话就换个方向继续寻找
* */
var trap2=function(height) {
    let left = 0,
        right = height.length - 1,
        leftMax = height[0],
        rightMax = height[right],
        ans = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (leftMax > height[left]) {
                ans += leftMax - height[left];
            } else {
                leftMax = height[left];
            }
            left += 1;
        } else {
            if (rightMax > height[right]) {
                ans += rightMax - height[right];
            } else {
                rightMax = height[right];
            }
            right -= 1;
        }
    }
    return ans;
};