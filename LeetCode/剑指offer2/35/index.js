/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */

// 使用map记录新节点
var copyRandomList = function (head) {
  if (!head) return head;

  let node = head;
  let map = new Map();

  // 复制节点
  while (node) {
    map.set(node, new Node(node.val, null, null));
    node = node.next;
  }

  node = head;
  // 设定新的random
  while (node) {
    map.get(node).next = map.get(node.next) || null;
    map.get(node).random = map.get(node.random) || null;
    node = node.next;
  }

  return map.get(head);
};
