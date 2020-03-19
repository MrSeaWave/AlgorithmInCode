/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const { makeListNode, ListNode } = require('../utils/js/utils.js');

var reverseBetween = function(head, m, n) {
  if (!head) return null;
  const count=n-m
  let tem=new ListNode()
  let result=tem
  tem.next=head
  for (let i = 0; i < m - 1; i++) {
    tem = tem.next;
  }
  let mFront=tem
  let mHead=tem.next;

  return result.next
};

const input = [{ head: [1, 2, 3, 4, 5], m: 2, n: 4 }];

input.forEach(item => {
  console.log('ans:', reverseBetween(makeListNode(item.head), item.m, item.n));
});
