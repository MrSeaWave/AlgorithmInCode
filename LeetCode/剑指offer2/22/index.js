/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 顺序查找
var getKthFromEnd_1 = function (head, k) {
  let tmp = head;
  let depth = 0;
  while (tmp) {
    tmp = tmp.next;
    depth++;
  }

  if (depth < k) return head;

  let result = head;
  let count = depth - k;
  while (count--) {
    result = result.next;
  }

  return result;
};

// 双指针
var getKthFromEnd = function (head, k) {
  let fast = head;
  let slow = head;

  // fast 与slow间隔k个数
  while (fast && k > 0) {
    fast = fast.next;
    k--;
  }

  // 移动fast指针
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};

const { makeListNode } = require('../../utils/js/utils');

console.log(getKthFromEnd(makeListNode([1, 2, 3, 44]), 2));
