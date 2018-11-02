/**
 * @param {string} num
 * @return {boolean}
 */
/*
* 思路：递归
* */
var isAdditiveNumber = function(num) {
  const dfs = (numStr, path = []) => {
    const pathLength = path.length;
    if (pathLength >= 3 && path[pathLength - 1] !== path[pathLength - 2] + path[pathLength - 3])
      return false;
    if (!numStr && pathLength >= 3) return true;
    for (let i = 0; i <= numStr.length - 1; i++) {
      const chunk = numStr.slice(0, i + 1);
      if (chunk[0] === '0' && chunk.length !== 1) continue; // 跳过01，0222，这种数据
      if (dfs(numStr.slice(i + 1), [...path,Number(chunk)])) return true;
    }
    return false;
  };
  return dfs(num);
};
console.log(isAdditiveNumber('199100199'));
