/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { makeListNode, ListNode } = require('../utils/js/utils.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  // 终止条件：如果当前节点或者只有一个节点，则终止，不需要交换
  if (head === null || head.next === null) return head;
  // 2. 调用单元
  // 需要交换的两个节点是 head 和 head.next
  let firstNode = head;
  let secondNode = head.next;
  // firstNode 连接后面交换完成的子链表
  firstNode.next = swapPairs(secondNode.next);
  // secondNode 连接 firstNode
  secondNode.next = firstNode;
  // 3. 返回值：返回交换完成的子链表
  // secondNode 变成了头结点
  return secondNode;
};

const input = [[1, 2, 3, 4]];

input.forEach(item => {
  const ans = swapPairs(makeListNode(item));
  console.log('ans:', ans);
});
