/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 暴力
var topKFrequent1 = function(nums, k) {
  const weight = {};
  nums.forEach(n => (weight[n] = (weight[n] || 0) + 1));
  nums.sort((a, b) => weight[b] - weight[a]);
  const result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (result.length === k) break;
    if (!result.includes(nums[i])) result.push(nums[i]);
  }
  return result;
};

const { PriorityQueue } = require('../utils/js/queue');
// 优先队列
var topKFrequent = function(nums, k) {
  const weight = {};
  nums.forEach(n => (weight[n] = (weight[n] || 0) + 1));
  let pq = new PriorityQueue(k, (a, b) => weight[a] - weight[b] < 0);
  let arr = Array.from(new Set(nums));
  for (let i = 0; i < arr.length; i++) {
    pq.enqueue(arr[i]);
  }
  return pq.maxHeap.data;
};

const input = [
  { nums: [1, 1, 1, 2, 2, 3], k: 2 },
  { nums: [1], k: 1 },
  { nums: [4, 1, -1, 2, -1, 2, 3], k: 2 }
];

input.forEach(item => {
  const ans = topKFrequent(item.nums, item.k);
  console.log('ans: ', ans);
});
// [-1,2]
