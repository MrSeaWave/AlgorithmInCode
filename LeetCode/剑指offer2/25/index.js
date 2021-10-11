/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { makeListNode, ListNode, parseListNodeToArray } = require('../../utils/js/utils');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let left = l1;
  let right = l2;
  let result = new ListNode(0);
  let cur = result;
  while (left || right) {
    if (left && right) {
      if (left.val < right.val) {
        cur.next = new ListNode(left.val);
        cur = cur.next;
        left = left.next;
      } else {
        cur.next = new ListNode(right.val);
        cur = cur.next;
        right = right.next;
      }
    } else {
      if (left && !right) {
        cur.next = left;
        break;
      }
      if (right && !left) {
        cur.next = right;
        break;
      }
    }
  }

  return result.next;
};

console.log(parseListNodeToArray(mergeTwoLists(makeListNode([1, 2, 4]), makeListNode([1, 3, 4]))));
