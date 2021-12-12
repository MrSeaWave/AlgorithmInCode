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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  function build(inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (inStart > inEnd || postStart > postEnd) return null;

    // 从后序遍历中确定根节点的值
    let root = postorder[postEnd];
    let node = new TreeNode(root);

    // 从中序遍历中确定 根节点位置
    let rootIndex = inorder.findIndex(v => v === root);
    // 确定左子树的数量
    let leftSize = rootIndex - inStart;

    // 位置确定图 详见 https://cdn.jsdelivr.net/gh/MrSeaWave/figure-bed-profile@main/uPic/2021/vkOik1_pR0IDW.png
    node.left = build(
      inorder,
      inStart,
      rootIndex - 1,
      postorder,
      postStart,
      postStart + leftSize - 1
    );
    node.right = build(
      inorder,
      rootIndex + 1,
      inEnd,
      postorder,
      postStart + leftSize,
      postEnd - 1
    );

    return node;
  }

  return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
