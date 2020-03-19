/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const { makeListNode, ListNode } = require('../utils/js/utils.js');

var reverseBetween = function(head, m, n) {
  if (!head) return null;
  let tem = new ListNode();
  let result = tem;
  tem.next = head;
  for (let i = 0; i < m - 1; i++) {
    tem = tem.next;
  }
  // m位置之前的数据
  let mFront = tem;
  // m 位置的数据
  let mHead = tem.next;
  for (let i = m - 1; i < n; i++) {
    tem = tem.next;
  }
  // n位置的数据
  let nHead = tem;
  // n 位置之后的数据
  let nEnd = tem.next;
  // 截断n位置数据
  nHead.next = null;
  // 普通反转函数，可参考206
  let reverse = (cur, pre) => {
    if (!cur) return pre;
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    return reverse(cur, pre);
  };
  // 开始进行拼接
  mFront.next = reverse(mHead, null);
  // 经过上次反转后，m位置已经移到n位置了
  mHead.next = nEnd;
  return result.next;
};

const input = [
  { head: [1, 2, 3, 4, 5], m: 2, n: 4 },
  { head: [1, 2, 3, 4, 5, 6, 7, 8], m: 1, n: 3 }
];

input.forEach(item => {
  const ans = reverseBetween(makeListNode(item.head), item.m, item.n);
  console.log('ans:', ans);
});
