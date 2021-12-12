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
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  // 记录所有子树以及出现的次数
  let hash = {};
  // 记录重复的子树根节点
  let result = [];

  // 辅助函数，开始后序遍历
  function traverse(root) {
    // # 记录空值
    if (root === null) return '#';

    let left = traverse(root.left);
    let right = traverse(root.right);

    // 将左右子树序列化成字符串，左右子树加上自己，就是以自己为根的二叉树序列化结果
    let subTree = `${left},${right},${root.val}->`;

    if (hash[subTree]) {
      hash[subTree] += 1;
      // 有人重复，把自己加入结果列表
      if (hash[subTree] === 2) {
        result.push(root);
      }
    } else {
      hash[subTree] = 1;
    }

    return subTree;
  }

  traverse(root);

  return result;
};

const data = {
  val: 1,
  left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
  right: {
    val: 3,
    left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
    right: { val: 4, left: null, right: null }
  }
};

console.log(findDuplicateSubtrees(data));
