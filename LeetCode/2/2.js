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
* 思路一：暴力解法，正常加法后重新转换listnode,涉及数字精度问题，（解法错误）
* */
var addTwoNumbers = function(l1, l2) {
  const changeList = value => {
    const getList = i => {
      if (i > value.length - 1) return null;
      const head = new ListNode(value[i]);
      head.next = getList(++i);
      return head;
    };
    return getList(0);
  };

  let l1num = "";
  let l2num = "";
  while (l1) {
    l1num = l1.val + l1num;
    l1 = l1.next;
  }
  while (l2) {
    l2num = l2.val + l2num;
    l2 = l2.next;
  }
  const sum = (parseInt(l1num) + parseInt(l2num))
    .toString()
    .split("")
    .reverse()
    .map(i => i * 1);
  return changeList(sum);
};

/*
* 思路二 ：链表操作
* */
var addTwoNumbers2 = function(l1, l2) {
  const head = new ListNode(0);
  let current = head;
  let carry = 0;
  while (l1 && l2) {
    const val = l1.val + l2.val + carry;
    const remainder = val % 10;
    current.next = new ListNode(remainder);
    carry = parseInt(val / 10);
    if (carry) current.next.next = new ListNode(carry);
    current = current.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  const single = v => {
    while (v) {
      const val = v.val + carry;
      const remainder = val % 10;
      current.next = new ListNode(remainder);
      carry = parseInt(val / 10);
      if (carry) current.next.next = new ListNode(carry);
      current = current.next;
      v = v.next;
    }
  };
  single(l1 || l2);
  return head.next;
};

/*
* 对上面代码进行优化,合并不用的single函数
* */
var addTwoNumbers2 = function(l1, l2) {
    const head = new ListNode(0);
    let current = head;
    let carry = 0;
    while (l1 || l2) {
        const val = (l1?l1.val:0) + (l2?l2.val:0) + carry;
        const remainder = val % 10;
        current.next = new ListNode(remainder);
        carry = parseInt(val / 10);
        if (carry) current.next.next = new ListNode(carry);
        current = current.next;
        l1 = l1?l1.next:l1;
        l2 = l2?l2.next:l2;
    }
    return head.next;
};

console.log(
  addTwoNumbers2(changeListNode([2, 5, 1, 3, 5]), changeListNode([4, 6, 9]))
);
//[5]
