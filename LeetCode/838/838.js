/**
 * @param {string} dominoes
 * @return {string}
 */
/*
* 思路一：纯模拟，比较点距左边与右边有符号的长度大小
* */
var pushDominoes = function(dominoes) {
  const ans = dominoes.split("");
  for (let i = 0; i < dominoes.length; i++) {
    if (dominoes[i] !== ".") continue;
    let leftNum = 1;
    let rightNum = 1;
    while (dominoes[i - leftNum] === "." && i - leftNum >= 0) {
      leftNum++;
    }
    while (dominoes[i + rightNum] === "." && rightNum < dominoes.length) {
      rightNum++;
    }
    const leftStr = dominoes[i - leftNum];
    const rightStr = dominoes[i + rightNum];
    let result = ans[i];
    // console.log("value", leftNum, leftStr, rightNum, rightStr, result);
    if (leftStr === "R") {
      result = "R";
      if (rightStr === "L" && leftNum === rightNum) result = ".";
      if (rightStr === "L" && leftNum > rightNum) result = "L";
    } else {
      if (rightStr === "L") {
        result = "L";
      }
    }
    // console.log("result", result);
    ans[i] = result;
  }
  return ans.join("");
};

// console.log(pushDominoes(".R........"));
// console.log(pushDominoes(".L.R...LR..L.."));
// console.log(pushDominoes(".R..L."));
console.log(pushDominoes(".......L.L"));
