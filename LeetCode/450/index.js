/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { makeTreeNode, TreeNode } = require('../utils/js/utils');

function getMinNode(node) {
  let result = node;
  while (result.left !== null) {
    result = result.left;
  }
  return result;
}
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root === null) return null;
  if (root.val === key) {
    // 处理key 恰好是末端节点，两个子节点都为空，或者只有一个非空子节点，那么它要让这个孩子接替自己的位置。
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    // 当有两个子节点，为了不破坏 BST 的性质， 必须找到左子树中最大的那个节点，或者右子树中最小的那个节点来接替自己。
    let minNode = getMinNode(root.right);
    // 删除右子树最小节点
    root.right = deleteNode(root.right, minNode.val);
    // 用右子树最小节点替换root节点
    minNode.left = root.left;
    minNode.right = root.right;
    root = minNode;
  }
  if (root.val > key) {
    // 去左子树进行查找
    root.left = deleteNode(root.left, key);
  }
  if (root.val < key) {
    // 去右子树进行查找
    root.right = deleteNode(root.right, key);
  }

  return root;
};

console.log(deleteNode(makeTreeNode([5, 3, 6, 2, 4, null, 7]), 3));
