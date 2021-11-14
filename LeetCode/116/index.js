/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root) return root;
  connectTwoNode(root.left,root.right)
  return root
};

function connectTwoNode(node1,node2){
  if(!node1||!node2){
    return;
  }

  // 将传入的两个节点连接
  node1.next=node2

  // 连接相同父节点的两个子节点
  connectTwoNode(node1.left,node1.right)
  connectTwoNode(node2.left,node2.right)
  // 连接跨越父节点的两个子节点
  connectTwoNode(node1.right,node2.left)

}

