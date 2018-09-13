/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
* 思路：查看24.jpg
* */
var judgePoint24 = function(nums) {
  let flag = false;
  const cards = nums.map(i => i);
  const judgePoint = cards => {
    // console.log("cards", cards, flag);
    if (flag) return;
    if (cards.length === 1) {
      flag = Math.abs(cards[0] - 24.0) < 0.001;
    } else {
      for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards.length; j++) {
          if (i === j) continue;
          const operand0 = cards[i];
          const operand1 = cards[j];
          const tem = [...cards];
          delete tem[i];
          delete tem[j];
          const subCards = [];
          tem.forEach(i => subCards.push(i));
          subCards.unshift(operand0 + operand1);
          // console.log('operand0',operand0,'operand1',operand1,'subCards',subCards)
          // console.log('+')
          judgePoint(subCards);
          subCards[0] = operand0 - operand1;
          // console.log('-')

          judgePoint(subCards);
          subCards[0] = operand0 * operand1;
          //  console.log('*')

          judgePoint(subCards);
          if (operand1 !== 0) {
            subCards[0] = operand0 / operand1;
            //  console.log('/')

            judgePoint(subCards);
          }
        }
      }
    }
  };
  judgePoint(cards);
  return flag;
};

/*
* 展示算出24点的过程
* */
var judgePoint24Show = function(nums) {
  let flag = false;
  const cards = nums.map(i => i);
  const process = nums.map(i => i);
  let ans =[];
  const judgePoint = (cards, process) => {
    if (cards.length === 1) {
      flag = Math.abs(cards[0] - 24.0) < 0.001;
      ans = flag?[...ans,process[0]]:ans;
    } else {
      for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards.length; j++) {
          if (i === j) continue;
          const operand0 = cards[i];
          const operand1 = cards[j];
          const tem = [...cards];
          delete tem[i];
          delete tem[j];
          const subCards = [];
          tem.forEach(i => subCards.push(i));
          subCards.unshift(operand0 + operand1);

          const process0 = process[i];
          const process1 = process[j];
          const temProcess = [...process];
          delete temProcess[i];
          delete temProcess[j];
          const subProcess = [];
          temProcess.forEach(i => subProcess.push(i));
          subProcess.unshift(`(${process0} + ${process1})`);

          judgePoint(subCards, subProcess);

          subCards[0] = operand0 - operand1;
          subProcess[0] = `(${process0} - ${process1})`;
          judgePoint(subCards, subProcess);

          subCards[0] = operand0 * operand1;
          subProcess[0] = `(${process0} * ${process1})`;
          judgePoint(subCards, subProcess);

          if (operand1 !== 0) {
            subCards[0] = operand0 / operand1;
            subProcess[0] = `(${process0} / ${process1})`;
            judgePoint(subCards, subProcess);
          }
        }
      }
    }
  };
  judgePoint(cards, process);
  return {flag,ans};
};
console.log(judgePoint24Show([4, 1, 8, 7]));
// 5 * (5 - 1 / 5)
// 1 5 5 5
