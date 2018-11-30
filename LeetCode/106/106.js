/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
/*
*
* https://www.cnblogs.com/bmrs/archive/2010/08/19/SloveTree.html
1 确定根,确定左子树，确定右子树。

2 在左子树中递归。

3 在右子树中递归。

4 打印当前根。
* */
const {  TreeNode } = require('../utils/js/utils');

var buildTree = function(inorder, postorder) {
  if(inorder.length===0) return null// 这句判断语句在中文很迷，有时候能通过，有时候死活过不去 [] [] return null 反解析后变成[]
  const recursiveFun=(inData,inStart,inEnd,postData,postStart,postEnd)=>{
    if(inStart>inEnd||postStart>postEnd) return null
    const treeNode=new TreeNode(postData[postEnd])
    for(let i=inStart;i<=inEnd;i++){
      if(inData[i]===postData[postEnd]){
        treeNode.left=recursiveFun(inData,inStart,i-1,postData,postStart,postStart+i-1-inStart)   //左子树
        treeNode.right=recursiveFun(inData,i+1,inEnd,postData,postStart+i-inStart,postEnd-1)  //右子树
      }
    }
    return treeNode
  }
  return recursiveFun(inorder,0,inorder.length-1,postorder,0,postorder.length-1)
};
console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
