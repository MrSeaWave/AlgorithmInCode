//给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
//
//
//
// 示例 1：
//
//
//输入：head = [1,2,3,3,4,4,5]
//输出：[1,2,5]
//
//
// 示例 2：
//
//
//输入：head = [1,1,1,2,3]
//输出：[2,3]
//
//
//
//
// 提示：
//
//
// 链表中节点数目在范围 [0, 300] 内
// -100 <= Node.val <= 100
// 题目数据保证链表已经按升序 排列
//
// Related Topics 链表 双指针 👍 827 👎 0
const { ListNode, makeListNode, parseListNodeToArray } = require('../../../../utils/js/utils');

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
var deleteDuplicates = function(head) {
  // 记录存在过节点
  let hash = {};
  let result = new ListNode();
  let cur = result;
  while (head) {
    const val = head.val;
    if (!hash[val]) {
      hash[val] = true;
      // 判断下一个是否和当前相同
      if (!head.next||head.next.val !== val) {
        // 添加至当前
        cur.next = new ListNode(val);
        cur = cur.next;
      }
    }
    head = head.next;
  }
  return result.next
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(deleteDuplicates(makeListNode([1,2,2])))
