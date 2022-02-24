//给你一个二叉树的根节点 root ， 检查它是否轴对称。
//
//
//
// 示例 1：
//
//
//输入：root = [1,2,2,3,4,4,3]
//输出：true
//
//
// 示例 2：
//
//
//输入：root = [1,2,2,null,3,null,3]
//输出：false
//
//
//
//
// 提示：
//
//
// 树中节点数目在范围 [1, 1000] 内
// -100 <= Node.val <= 100
//
//
//
//
// 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1752 👎 0

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
//https://leetcode-cn.com/problems/symmetric-tree/solution/dong-hua-yan-shi-101-dui-cheng-er-cha-shu-by-user7/
var isSymmetric = function (root) {
  if (!root) return true;

  return dfs(root.left, root.right);
};

function dfs(left, right) {
  // 递归终止条件
  // 两个节点都为空
  // 其中有一方为空
  // 或者是两个值不相等
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;

  // 再递归比较孩子们
  return dfs(left.left, right.right) && dfs(left.right, right.left);
}
//leetcode submit region end(Prohibit modification and deletion)
