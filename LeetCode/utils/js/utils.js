// leetCode给到的链表格式
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 将给到的数组转变成链表ListNode格式
const makeListNode = value => {
  const getList = i => {
    if (i > value.length - 1) return null;
    const head = new ListNode(value[i]);
    head.next = getList(++i);
    return head;
  };
  return getList(0);
};

/**
 * @desc 将listNode节点解析成数组
 * @param {ListNode} node - ListNode
 * */

const parseListNodeToArray = node => {
  if (!node.next) return [node.val];
  return [node.val, ...parseListNodeToArray(node.next)];
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 将给到的数组转变成链表TreeNode格式
const makeTreeNode = value => {
  // 做树
  const getTree = (data, i, depth) => {
    if (data[i] === null) return null;
    if (i > data.length - 1) return null;
    const head = new TreeNode(data[i]);
    head.left = getTree(data, 2 * i + 1, depth + 1);
    head.right = getTree(data, 2 * i + 2, depth + 1);
    return head;
  };
  // 扩充数组，增加[0, 3, 1, 4, null, 2, null, null, 6, null, 5]的数据输出
  const insertArray = arr => {
    const data = [...arr];
    arr.forEach((i, index) => {
      if (i === null) {
        data.splice(2 * index + 1, 0, null);
        data.splice(2 * index + 2, 0, null);
      }
    });
    return data;
  };
  const ans = getTree(insertArray(value), 0, 1);
  return ans;
};

// console.log(
//   "makeTreeNode([0,3,1,4,null,2,null,null,6,null,5])",
//   makeTreeNode([0, 3, 1, 4, null, 2, null, null, 6, null, 5])
//   // makeTreeNode([0,1,3,null,2])
// );
module.exports = { makeListNode, ListNode, TreeNode, makeTreeNode, parseListNodeToArray };
