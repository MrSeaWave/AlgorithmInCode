//给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
//
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（
//一个节点也可以是它自己的祖先）。”
//
//
//
// 示例 1：
//
//
//输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
//输出：3
//解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
//
//
// 示例 2：
//
//
//输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
//输出：5
//解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
//
//
// 示例 3：
//
//
//输入：root = [1,2], p = 1, q = 2
//输出：1
//
//
//
//
// 提示：
//
//
// 树中节点数目在范围 [2, 10⁵] 内。
// -10⁹ <= Node.val <= 10⁹
// 所有 Node.val 互不相同 。
// p != q
// p 和 q 均存在于给定的二叉树中。
//
// Related Topics 树 深度优先搜索 二叉树 👍 1545 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// https://www.bilibili.com/video/BV12Z4y15721
var lowestCommonAncestor = function (root, p, q) {
  //  先求出两个节点的路径，从根节点到目标节点的路径
  //  再求出路径中相同的节点
  let pPath = [];
  let qPath = [];
  let stack = [];

  dfsSearch(root, p, stack,pPath );
  stack = [];
  dfsSearch(root, q, stack,qPath);

  let resNode = root;
  let i = 0;
  // 求出路径中相同的节点
  while (i < pPath.length && i < qPath.length) {
    if (pPath[i] === qPath[i]) {
      resNode = pPath[i];
    }
    i++;
  }

  return resNode;
};

/**
 * 找出节点路径
 * @param node 当前正在搜索的节点
 * @param target 待查找路径的节点
 * @param stack 存储节点路径的栈
 * @param path 存储待最后找到的 target 节点路径
 */
function dfsSearch(node, target, stack, path) {
  if (!node) return;
  //  当前节点入栈
  stack.push(node);

  // 如果是目标节点
  if (node === target) {
    // 将结果路径存储在栈中
    stack.forEach((p) => {
      path.push(p);
    });
    return;
  }

  dfsSearch(node.left, target, stack, path);
  dfsSearch(node.right, target, stack, path);
  // 为了保证后续栈中存储的节点为根节点到目标节点的路径上的节点
  stack.pop();
}
//leetcode submit region end(Prohibit modification and deletion)
