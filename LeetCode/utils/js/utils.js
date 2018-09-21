// leetCode给到的链表格式
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 将给到的数组转变成链表ListNode格式
const changeListNode = value => {
  const getList = i => {
    if (i > value.length - 1) return null;
    const head = new ListNode(value[i]);
    head.next = getList(++i);
    return head;
  };
  return getList(0);
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 将给到的数组转变成链表TreeNode格式
// 有错，待修改
const changeTreeNode = value => {
  const getTree = (i, depth) => {
    if (value[i] === null) return null;
    if (i > value.length - 1) return null;
    const head = new TreeNode(value[i]);
    head.left = getTree(2 * i + 1, depth + 1);
    head.right = getTree(2 * i + 2, depth + 1);
    return head;
  };
  const ans = getTree(0, 1);
  return ans;
  // return getTree(0,1);
};
console.log('changeTreeNode([0,3,1,4,null,2,null,null,6,null,5])',changeTreeNode([0,3,1,4,null,2,null,null,6,null,5]))

module.exports = { changeListNode, ListNode, TreeNode, changeTreeNode };
