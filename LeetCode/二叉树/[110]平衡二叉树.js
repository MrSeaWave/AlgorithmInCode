//给定一个二叉树，判断它是否是高度平衡的二叉树。
//
// 本题中，一棵高度平衡二叉树定义为：
//
//
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
//
//
//
//
// 示例 1：
//
//
//输入：root = [3,9,20,null,null,15,7]
//输出：true
//
//
// 示例 2：
//
//
//输入：root = [1,2,2,3,3,null,null,4,4]
//输出：false
//
//
// 示例 3：
//
//
//输入：root = []
//输出：true
//
//
//
//
// 提示：
//
//
// 树中的节点数在范围 [0, 5000] 内
// -10⁴ <= Node.val <= 10⁴
//
// Related Topics 树 深度优先搜索 二叉树 👍 891 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 自上而下，暴力破解
var isBalanced_1 = function (root) {
  if (!root) return true;
  //  递归循环左右子树的高度差是否为1
  let isSonBalanced = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
  return isSonBalanced && isBalanced(root.left) && isBalanced(root.right);
};

function getHeight(node) {
  if (!node) return 0;
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

// 自下而上，在查找高度时顺便判断是否是平衡二叉树
var isBalanced = function (root) {
  if (!root) return true;
  return isBalancedWithHeight(root) !== -1;
};

// 在找高度时去判断是否是平衡二叉树
function isBalancedWithHeight(node) {
  if (!node) return 0;
  let left = isBalancedWithHeight(node.left);
  if (left === -1) return -1;
  let right = isBalancedWithHeight(node.right);
  if (right === -1) return -1;

  if (Math.abs(left - right) <= 1) {
    return Math.max(left, right) + 1;
  } else {
    return -1;
  }
}
//leetcode submit region end(Prohibit modification and deletion)
