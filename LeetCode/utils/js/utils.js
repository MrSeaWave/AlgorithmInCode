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

module.exports={changeListNode,ListNode}