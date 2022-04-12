//给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
//
//
//
// 示例 1：
//
//
//输入：root = [3,9,20,null,null,15,7]
//输出：[[3],[20,9],[15,7]]
//
//
// 示例 2：
//
//
//输入：root = [1]
//输出：[[1]]
//
//
// 示例 3：
//
//
//输入：root = []
//输出：[]
//
//
//
//
// 提示：
//
//
// 树中节点数目在范围 [0, 2000] 内
// -100 <= Node.val <= 100
//
// Related Topics 树 广度优先搜索 二叉树 👍 618 👎 0

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
 * @return {number[][]}
 */
// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/solution/bfshe-dfsliang-chong-jie-jue-fang-shi-by-184y/
var zigzagLevelOrder = function(root) {
  // dfs 遍历
  // 利用二叉树的前序遍历，在遍历每层的最左侧节点时，创建当前层的链表
  // 偶数层插入链表队尾，奇数层插入链表队头
  let result = [];

  function dfs(node, depth) {
    if (!node) return;
    //如果result.length <= depth 说明下一层的集合还没创建，所以要先创建下一层的集合
    if (result.length <= depth) {
      result.push([]);
    }
    //遍历到第几层我们就操作第几层的数据
    let list = result[depth];
    //这里默认根节点是第0层，偶数层相当于从左往右遍历，
    // 所以要添加到集合的末尾，如果是奇数层相当于从右往左遍历，
    // 要把数据添加到集合的开头
    if (depth % 2 === 0) {
      list.push(node.val);
    } else {
      list.unshift(node.val);
    }
    //分别遍历左右两个子节点，到下一层了，所以层数要加1
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
