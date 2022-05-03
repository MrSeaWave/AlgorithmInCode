//给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链
//表节点，返回 反转后的链表 。
//
//
// 示例 1：
//
//
//输入：head = [1,2,3,4,5], left = 2, right = 4
//输出：[1,4,3,2,5]
//
//
// 示例 2：
//
//
//输入：head = [5], left = 1, right = 1
//输出：[5]
//
//
//
//
// 提示：
//
//
// 链表中节点数目为 n
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n
//
//
//
//
// 进阶： 你可以使用一趟扫描完成反转吗？
// Related Topics 链表 👍 1259 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let root = new ListNode();
  root.next = head;

  let startNode = root;
  let endNode = root;
  for (let i = 0; i < left - 1; i++) {
    startNode = startNode.next;
  }
  for (let i = 0; i < right + 1; i++) {
    endNode = endNode.next;
  }
  // 带翻转的链表
  let reverseStartNode=startNode.next
  //  翻转链表
  let reverseNode = reverseNodeFunc(reverseStartNode, right - left + 1);
  //  拼接在一起
  reverseStartNode.next = endNode;
  startNode.next = reverseNode;

  return root.next;
};

// 前K个翻转
function reverseNodeFunc(head, k) {
  let pre = null;
  let cur = head;

  for (let i = 0; i < k; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
}
//leetcode submit region end(Prohibit modification and deletion)
