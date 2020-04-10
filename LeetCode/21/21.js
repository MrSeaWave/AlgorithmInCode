/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { makeListNode, ListNode, parseListNodeToArray } = require('../utils/js/utils');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
 * 思路：理解转换成链表的含义
 * */
var mergeTwoLists1 = function(l1, l2) {
  let head = new ListNode(0),
    currentList = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      currentList.next = l1;
      l1 = l1.next;
    } else {
      currentList.next = l2;
      l2 = l2.next;
    }
    // console.log('端点',currentList,currentList.next)
    currentList = currentList.next;
  }
  if (l1) {
    currentList.next = l1;
  }
  if (l2) {
    currentList.next = l2;
  }
  return head.next;
};

// 递归方法实现链表合并
var mergeTwoLists = function(l1, l2) {
  const merge = (l1, l2) => {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    if (l1.val > l2.val) {
      l2.next = merge(l1, l2.next);
      return l2;
    } else {
      l1.next = merge(l1.next, l2);
      return l1;
    }
  };
  return merge(l1, l2);
};
console.log(parseListNodeToArray(mergeTwoLists(makeListNode([1, 2, 4]), makeListNode([1, 3, 4]))));
