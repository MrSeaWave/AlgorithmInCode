//给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的
//根节点的引用。
//
// 一般来说，删除节点可分为两个步骤：
//
//
// 首先找到需要删除的节点；
// 如果找到了，删除它。
//
//
//
//
// 示例 1:
//
//
//
//
//输入：root = [5,3,6,2,4,null,7], key = 3
//输出：[5,4,6,2,null,null,7]
//解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
//一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
//另一个正确答案是 [5,2,6,null,4,null,7]。
//
//
//
//
// 示例 2:
//
//
//输入: root = [5,3,6,2,4,null,7], key = 0
//输出: [5,3,6,2,4,null,7]
//解释: 二叉树不包含值为 0 的节点
//
//
// 示例 3:
//
//
//输入: root = [], key = 0
//输出: []
//
//
//
// 提示:
//
//
// 节点数的范围 [0, 10⁴].
// -10⁵ <= Node.val <= 10⁵
// 节点值唯一
// root 是合法的二叉搜索树
// -10⁵ <= key <= 10⁵
//
//
//
//
// 进阶： 要求算法时间复杂度为 O(h)，h 为树的高度。
// Related Topics 树 二叉搜索树 二叉树 👍 645 👎 0

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
 * @param {number} key
 * @return {TreeNode}
 */
// https://leetcode-cn.com/problems/delete-node-in-a-bst/solution/miao-dong-jiu-wan-shi-liao-by-terry2020-tc0o/
var deleteNode = function (root, key) {
  if (!root) return null;

  if (key > root.val) {
    // 去右子树搜索并进行删除
    root.right = deleteNode(root.right, key);
  }
  if (key < root.val) {
    // 去左子树搜索并进行删除
    root.left = deleteNode(root.left, key);
  }
  if (key === root.val) {
    // 处理key 恰好是末端节点，两个子节点都为空，或者只有一个非空子节点，那么它要让这个孩子接替自己的位置。
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    //  为了不破坏BST 必须寻找到左子树中的最大值 或者右子树中的最小值
    let minNode = getMinNode(root.right);
    // 用右子树最小节点替换root节点
    minNode.left = root.left;
    root = root.right;
  }

  return root;
};

function getMinNode(node) {
  let res = node;
  while (res.left) {
    res = res.left;
  }
  return res;
}
//leetcode submit region end(Prohibit modification and deletion)
