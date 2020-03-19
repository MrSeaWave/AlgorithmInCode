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

var reverseList = function(head) {
  if (!head) return head;
  let result = new ListNode(head.val);
  let nextNode = head.next;
  while (nextNode && (nextNode.val === 0 || nextNode.val)) {
    const newNode = new ListNode(nextNode.val);
    newNode.next = result;
    result = newNode;
    nextNode = nextNode.next;
  }
  return result;
};

let reverseList1 = head => {
  if (!head) return null;
  let pre = null,
    cur = head;
  while (cur) {
    // 保存下一个节点的值
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

const input = [[], [1, 2, 3, 4, 5], [1, 0, 2, 6, 8]];

input.forEach(item => {
  console.log('data', reverseList1(makeListNode(item)));
});
