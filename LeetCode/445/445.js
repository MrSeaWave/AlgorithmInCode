//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const { changeListNode } = require("../utils/js/utils.js");
/*
* 思路一：反转链表，之后用第二题的解题思路进行操作
* */
var addTwoNumbers = function(l1, l2) {
  const dealReverse = (v1, v2) => {
    const head = new ListNode(0);
    let current = head;
    let carry = 0;
    while (v1 || v2) {
      const val = (v1 ? v1.val : 0) + (v2 ? v2.val : 0) + carry;
      const remainder = val % 10;
      current.next = new ListNode(remainder);
      carry = parseInt(val / 10);
      if (carry) current.next.next = new ListNode(carry);
      current = current.next;
      v1 = v1 ? v1.next : v1;
      v2 = v2 ? v2.next : v2;
    }
    return head.next;
  };
  const reverseData = l => {
    let head = new ListNode(l.val);
    let current = head;
    l = l.next;
    while (l) {
      current = new ListNode(l.val);
      current.next = head;
      head = current;
      l = l.next;
    }
    return current;
  };
  const r1 = reverseData(l1);
  const r2 = reverseData(l2);
  const ans = reverseData(dealReverse(r1, r2));
  return ans;
  // console.log('reverseData',reverseData(l1))
};

/*
* 思路二：https://leetcode.com/problems/add-two-numbers-ii/discuss/92706/49ms-O(n)-time-O(1)-space-solution-easy-to-understand-no-reverse-no-stack
* 暂时没想到有什么比较不错的解法
* */
var addTwoNumbers2 = function(l1, l2) {};

console.log(
  addTwoNumbers2(changeListNode([7, 2, 4, 3]), changeListNode([5, 6, 4]))
);
//[5]
