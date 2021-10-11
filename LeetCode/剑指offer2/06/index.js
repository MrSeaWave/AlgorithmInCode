/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { makeListNode } = require('../../utils/js/utils');

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (!head) return [];
  let cur = head;
  let result = [];

  while (cur.next) {
    result.unshift(cur.val);
    cur = cur.next;
  }

  // 最后一位
  result.unshift(cur.val);

  return result;
};

console.log(reversePrint(makeListNode([1, 3, 2])));
