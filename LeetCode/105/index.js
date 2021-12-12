/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { TreeNode } = require('../utils/js/utils');

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length && !inorder.length) {
    return null;
  }
  // 从前序遍历中确定根节点的值
  let root = preorder[0];
  let node = new TreeNode(root);
  // 确定在中序遍历中根节点位置
  let rootIndex = inorder.findIndex(v => v === root);
  // 确定中序遍历中左边节点
  let leftInorderArea = inorder.slice(0, rootIndex);
  // 确定左子树的数量
  let leftSize = leftInorderArea.length;
  // 确定前序遍历中左子树的区域
  let leftPreorderArea = preorder.slice(1, leftSize + 1);

  let rightInorderArea = inorder.slice(rootIndex + 1);
  let rightPreorderArea = preorder.slice(leftSize + 1);

  node.left = buildTree(leftPreorderArea, leftInorderArea);
  node.right = buildTree(rightPreorderArea, rightInorderArea);

  return node;
};

// 优化数据，采用指针形式

var buildTree2 = function(preorder, inorder) {
  function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;

    // 从前序遍历中确定根节点的值
    let root = preorder[preStart];
    let node = new TreeNode(root);
    // 从中序遍历中确定 根节点位置
    let rootIndex = inorder.findIndex(v => v === root);
    // 确定左子树的数量
    let leftSize = rootIndex - inStart;

    node.left = build(preorder, preStart + 1, preStart + leftSize, inorder, inStart, rootIndex - 1);
    node.right = build(preorder, preStart + leftSize + 1, preEnd, inorder, rootIndex + 1, inEnd);

    return node
  }

  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};
const preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];

console.log(buildTree2(preorder, inorder));
