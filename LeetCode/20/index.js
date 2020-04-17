/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = { '(': ')', '[': ']', '{': '}' };
  const strList = s.split('');
  const stack = [];
  strList.forEach(s => {
    if (!stack.length) {
      // 新增数据
      stack.push(s);
    } else {
      const str = stack[stack.length - 1];
      // 括号匹配上，移除数据
      if (map[str] === s) {
        stack.pop();
      } else {
        stack.push(s);
      }
    }
  });
  return stack.length === 0;
};

const input = ['()', '()[]{}', '(]', '([)]', '{[]}', '(((((((]'];
input.forEach(str => {
  console.log('ans:', isValid(str));
});
