/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { makeListNode } = require('../../utils/js/utils');

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 公共节点是比较地址，不是比较值
// 哈希集合,(题目的链表可能相同的部分共用一个内存地址，本地运行会失败)
var getIntersectionNode_1 = function (headA, headB) {
  const visited = new Set();
  let tmp = headA;
  while (tmp) {
    visited.add(tmp);
    tmp = tmp.next;
  }

  tmp = headB;
  while (tmp) {
    if (visited.has(tmp)) return tmp;
    tmp = tmp.next;
  }

  return null;
};

// 双指针,参考：https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/solution/yi-zhang-tu-jiu-ming-bai-ai-qing-jie-shi-up3a/
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
};

console.log(getIntersectionNode(makeListNode([4, 1, 8, 4, 5]), makeListNode([5, 0, 1, 8, 4, 5])));
