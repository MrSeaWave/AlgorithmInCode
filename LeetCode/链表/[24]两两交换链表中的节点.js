//给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
//
//
//
// 示例 1：
//
//
//输入：head = [1,2,3,4]
//输出：[2,1,4,3]
//
//
// 示例 2：
//
//
//输入：head = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：head = [1]
//输出：[1]
//
//
//
//
// 提示：
//
//
// 链表中节点的数目在范围 [0, 100] 内
// 0 <= Node.val <= 100
//
// Related Topics 递归 链表 👍 1240 👎 0

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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let pre = null;
  let cur = head;
  // 2 个一组当做交换
  for (let i = 0; i < 2; i++) {
    // 暂存当前节点的后续节点
    let next = cur.next;
    // 将当前节点指向反向链表
    cur.next = pre;
    // 更新反向链表的头指针为当前已处理的节点
    pre = cur;
    // 将正向链表头指针替换为暂存的节点
    cur = next;
  }

  head.next = swapPairs(cur);

  return pre;
};
//leetcode submit region end(Prohibit modification and deletion)
