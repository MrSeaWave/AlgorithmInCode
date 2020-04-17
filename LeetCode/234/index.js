/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { makeListNode, ListNode } = require('../utils/js/utils');

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const list = [];
  while (!!head) {
    list.push(head.val);
    head = head.next;
  }
  const mid = Math.floor((list.length - 1) / 2);
  let result = true;
  for (let i = 0; i <= mid; i++) {
    if (list[i] !== list[list.length - 1 - i]) {
      result = false;
      break;
    }
  }
  return result;
  // 两种返回方法都可以
  // return list.every((val, index) => val === list[list.length - 1 - index]);
};

const input = [[1, 2], [1, 2, 2, 4], [1, 2, 1], [1, 2, 2, 1]];
input.forEach(item => {
  const result = isPalindrome(makeListNode(item));
  console.log('ans: ', result);
});
