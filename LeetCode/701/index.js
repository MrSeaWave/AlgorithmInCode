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
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  // 找到空位置则进行插入
  if(root===null) return new TreeNode(val);
  // 往右边子树插入
  if(root.val<val){
    root.right=insertIntoBST(root.right,val)
  }
  // 往左子树插入
  if(root.val>val){
    root.left=insertIntoBST(root.left,val)
  }
  return root
};

console.log(insertIntoBST(makeTreeNode([4,2,7,1,3]),5))
