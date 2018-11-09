/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

/*
* 暴力 超时
* */

var shortestSubarray1 = function(A, K) {
  let ans=[]
  for(let i=0;i<=A.length-1;i++){
    const sumList=[A[i]]
    let sum=A[i]
    if(sum>=K&&(sumList.length<ans.length||ans.length===0)) {
      ans=[...sumList]
      break
    }
    for(let j=i+1;j<=A.length-1;j++){
      sum+=A[j]
      sumList.push(A[j])
      if(sum>=K&&(sumList.length<ans.length||ans.length===0)) {
        ans=[...sumList]
        break
      }
    }
  }
  return ans.length||-1
};

/*
*
*双端队列，滑动窗口，题解
* 1. 如果有 x1<x2 並且 P[x2]<=P[x1]，那麽opt(y)一定不是 x1，因為如果有P[x1] <= P[y] - K，
* 那麽 P[x2] <= P[x1] <= P[y] - K，但是 y - x2 is smaller。
* 這表明對於opt(y)的候選x應該是在使P(x)遞增的區間去找。要註意這裏的P[x1]指的是從0到X1的數組元素之和，不是單單指一個x1位置上元素的值。
* 2. 如果opt(y1)=x, 那麽不需要再次考慮x。因為如果我們找到某些y2>y1並且opt(y2)=x，那麽這表明這個解答 y2-x 是比之前的解答 y1-x 是更壞的答案。
* */
var shortestSubarray = function(A, K) {
  const aLength=A.length
  const p=[0]
  let ans=aLength+1
  for(let i=0;i<=aLength-1;i++){
    p[i+1]=p[i]+A[i]
  }
  const indexQueue=[]
  for(let i=0;i<=aLength;i++){
    while(indexQueue.length>0&&p[i]-p[indexQueue[0]]>=K){
      ans=Math.min(ans,i-indexQueue.shift())
    }
    while(indexQueue.length>0&&p[i]<=p[indexQueue[indexQueue.length-1]]){
      // 中间为负数，绝对不可能为K，所以需要删除
      indexQueue.pop()
    }
    indexQueue.push(i)
  }
  return ans<=aLength?ans:-1
}


console.log(shortestSubarray([1,2],4))
