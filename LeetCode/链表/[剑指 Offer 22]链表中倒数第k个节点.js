//输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
//
// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
//
//
//
// 示例：
//
//
//给定一个链表: 1->2->3->4->5, 和 k = 2.
//
//返回链表 4->5.
// Related Topics 链表 双指针 👍 327 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 深度
var getKthFromEnd_1 = function (head, k) {
  let depth = 0;
  let tem = head;
  //  先计算节点深度
  while (tem) {
    depth++;
    tem = tem.next;
  }
  let cur = head;
  let curDepth = 0;
  while (curDepth < depth - k) {
    curDepth++;
    cur = cur.next;
  }

  return cur;
};

// 快慢指针，滑块的思想
var getKthFromEnd = function (head, k) {
  let tem = new ListNode();
  tem.next = head;
  let left = tem;
  let right = tem;
  while (k) {
    right = right.next;
    k--;
  }
  while (right.next) {
    right = right.next;
    left = left.next;
  }
  return left.next;
};
//leetcode submit region end(Prohibit modification and deletion)
