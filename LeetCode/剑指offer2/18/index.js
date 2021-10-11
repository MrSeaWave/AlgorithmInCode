/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let result = new ListNode(0);
  let cur = result;
  while (head) {
    if (head.val !== val) {
      cur.next = new ListNode(head.val);
      cur = cur.next;
      head = head.next;
    } else {
      cur.next = head.next;
      break;
    }
  }

  return result.next;
};

const { makeListNode, ListNode } = require('../../utils/js/utils');

console.log(deleteNode(makeListNode([4, 5, 1, 9]), 5));
