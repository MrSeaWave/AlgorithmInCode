/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const {changeListNode,ListNode} =require("../utils/js/utils")


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
* 思路：理解转换成链表的含义
* */
var mergeTwoLists = function(l1, l2) {
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

console.log(mergeTwoLists(changeListNode([1,2,4]),changeListNode([1,3,4])))