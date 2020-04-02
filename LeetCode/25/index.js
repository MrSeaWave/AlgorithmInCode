/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { makeListNode, ListNode, parseListNodeToArray } = require('../utils/js/utils.js');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let lastHead = head;
  // 如果不足k个数据，则不用进行交换
  for (let i = 0; i < k; i++) {
    if (!lastHead) return head;
    lastHead = lastHead.next;
  }
  // 开始进行交换
  let pre = null;
  let cur = head;
  for (let i = 0; i < k; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  // 指向后面交换的数据
  head.next = reverseKGroup(cur, k);
  return pre;
};

const input = [{ head: [1, 2, 3, 4, 5], k: 2 }, { head: [1, 2, 3, 4, 5], k: 3 }];

input.forEach(item => {
  const result = reverseKGroup(makeListNode(item.head), item.k);
  console.log('listNode ans:', result);
  console.log('array ans:', parseListNodeToArray(result));
});
