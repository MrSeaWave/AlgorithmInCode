/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} preorder
 * @return {TreeNode}
 */
/*
*
*
1 确定根,确定左子树，确定右子树。

2 在左子树中递归。

3 在右子树中递归。

4 打印当前根。
* */
const {  TreeNode } = require('../utils/js/utils');

var buildTree = function(preorder, inorder) {
  if(inorder.length===0) return null // 这句判断语句在中文很迷，有时候能通过，有时候死活过不去
  const recursiveFun=(preData,preStart,preEnd,inData,inStart,inEnd)=>{
    if(inStart>inEnd||preStart>preEnd) return null
    const treeNode=new TreeNode(preData[preStart])
    for(let i=inStart;i<=inEnd;i++){
      if(inData[i]===preData[preStart]){
        treeNode.left=recursiveFun(preData,preStart+1,preStart+i-inStart,inData,inStart,i-1)   //左子树
        treeNode.right=recursiveFun(preData,preStart+i-inStart+1,preEnd,inData,i+1,inEnd)  //右子树
      }
    }
    return treeNode
  }
  return recursiveFun(preorder,0,preorder.length-1,inorder,0,inorder.length-1,)
};
console.log(buildTree([3,9,20,15,7],[9, 3, 15, 20, 7]));
