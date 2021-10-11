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
var reverseList = function (head) {
  let cur = null;
  while (head) {
    let tmp = new ListNode(head.val);
    tmp.next = cur;
    cur = tmp;
    head = head.next;
  }
  return cur;
};

const { makeListNode, ListNode, parseListNodeToArray } = require('../../utils/js/utils');

console.log(parseListNodeToArray(reverseList(makeListNode([1, 2, 3, 4, 5, 6]))));
