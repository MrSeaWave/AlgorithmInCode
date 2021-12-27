//给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。
//
//
//
//
//
// 示例 1：
//
//
//输入：n = 3
//输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
//
//
// 示例 2：
//
//
//输入：n = 1
//输出：[[1]]
//
//
//
//
// 提示：
//
//
// 1 <= n <= 8
//
//
//
// Related Topics 树 二叉搜索树 动态规划 回溯 二叉树 👍 1080 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { makeTreeNode, TreeNode } = require('../utils/js/utils');

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) return [];

  function build(low, high) {
    let result = [];
    if (low > high) {
      result.push(null);
      return result
    }

    for (let i = low; i <= high; i++) {
      // 递归构造出左右子树的所有合法 BST。
      let leftTreeList = build(low, i - 1);
      let rightTreeList = build(i + 1, high);

      for (let left of leftTreeList) {
        for (let right of rightTreeList) {
          // i 作为根节点 root 的值
          let root=new TreeNode(i)
          root.left=left
          root.right=right
          result.push(root)
        }
      }
    }

    return result;
  }


  return build(1, n);

};

console.log(generateTrees(3));
//leetcode submit region end(Prohibit modification and deletion)
