/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { makeListNode, ListNode, parseListNodeToArray } = require('../utils/js/utils.js');

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 递归实现链表的合并，拆封成俩俩合并的形式
var mergeKLists = function(lists) {
  // 俩俩递归实现合并链表
  const mergeTwoList = (l1, l2) => {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    if (l1.val > l2.val) {
      l2.next = mergeTwoList(l1, l2.next);
      return l2;
    } else {
      l1.next = mergeTwoList(l1.next, l2);
      return l1;
    }
  };

  // 拆分成俩俩合并
  const splitMerge = (lists, start, end) => {
    if (end < start) return null;
    if (end === start) return lists[end];
    const mid = Math.floor(start + (end - start) / 2);
    return mergeTwoList(splitMerge(lists, start, mid), splitMerge(lists, mid + 1, end));
  };

  return splitMerge(lists, 0, lists.length - 1);
};

const input = [[[1, 4, 5], [1, 3, 4], [2, 6]]];
input.forEach(item => {
  const result = mergeKLists(item.map(value => makeListNode(value)));
  console.log('ans:', parseListNodeToArray(result));
});
