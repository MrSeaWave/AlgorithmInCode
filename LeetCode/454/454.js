/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
/*
* 思路一：纯暴力（超时）
* */
var fourSumCount = function(A, B, C, D) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  C.sort((a, b) => a - b);
  D.sort((a, b) => a - b);
  let ans = 0;
  A.forEach(a => {
    B.forEach(b => {
      C.forEach(c => {
        D.forEach(d => {
          if (a + b + c + d === 0) ans += 1;
        });
      });
    });
  });
  return ans;
};
/*
* 思路二 相当于两个两数之和,(46,超出内存限制)
* */
var fourSumCount2 = function(A, B, C, D) {
  const a_b = [];
  const c_d = [];
  let ans = 0;
  A.forEach(a => {
    B.forEach(b => {
      a_b.push({ val: a + b, type: "a" });
    });
  });
  C.forEach(a => {
    D.forEach(b => {
      c_d.push({ val: a + b, type: "b" });
    });
  });
  const a_b_c_d = [...a_b, ...c_d];
  const hashSet = {};
  for (let i in a_b_c_d) {
    const expect = -a_b_c_d[i].val;
    const type = `${expect}_${a_b_c_d[i].type === "a" ? "b" : "a"}`;
    const extra = `${-expect}_${a_b_c_d[i].type}`;
    if (hashSet[type]) {
      ans += hashSet[type];
    } else hashSet[extra] = hashSet[extra] ? hashSet[extra] + 1 : 1;
  }
  return ans;
};

console.log(fourSumCount2([-1, -1], [-1, 1], [-1, 1], [1, -1]));

/*
* 48,超出内存限制
* */
var fourSumCount3 = function(A, B, C, D) {
  const a_b_hash = {};
  const c_d_hash = {};
  const a_b_c_d = [];
  let ans = 0;
  A.forEach(a => {
    B.forEach(b => {
      a_b_hash[a + b] = {
        val: a + b,
        type: "a",
        num: a_b_hash[a + b] ? a_b_hash[a + b].num + 1 : 1
      };
    });
  });
  C.forEach(a => {
    D.forEach(b => {
      c_d_hash[a + b] = {
        val: a + b,
        type: "b",
        num: c_d_hash[a + b] ? c_d_hash[a + b].num + 1 : 1
      };
    });
  });
  for (let i in a_b_hash) {
    a_b_c_d.push(a_b_hash[i]);
  }
  for (let i in c_d_hash) {
    a_b_c_d.push(c_d_hash[i]);
  }
  const hashSet = {};
  for (let i in a_b_c_d) {
    const expect = -a_b_c_d[i].val;
    const type = `${expect}_${a_b_c_d[i].type === "a" ? "b" : "a"}`;
    const extra = `${-expect}_${a_b_c_d[i].type}`;
    if (hashSet[type]) {
      ans = ans + hashSet[type] * a_b_c_d[i].num;
    } else hashSet[extra] = a_b_c_d[i].num;
  }
  return ans;
};

/*
* 思路二：两个两数之和，（二分查找）（去掉上面代码中多余的hashSet）
* */
var fourSumCount4 = function(A, B, C, D) {
  const a_b_hash = {};
  const c_d_hash = {};
  let ans = 0;
  A.forEach(a => {
    B.forEach(b => {
      a_b_hash[a + b] = {
        val: a + b,
        type: "a",
        num: a_b_hash[a + b] ? a_b_hash[a + b].num + 1 : 1
      };
    });
  });
  C.forEach(a => {
    D.forEach(b => {
      c_d_hash[a + b] = {
        val: a + b,
        type: "b",
        num: c_d_hash[a + b] ? c_d_hash[a + b].num + 1 : 1
      };
    });
  });
  for (let i in a_b_hash) {
    const expect = -a_b_hash[i].val;
    if (c_d_hash[expect]) {
      ans += c_d_hash[expect].num * a_b_hash[i].num;
    }
  }
  return ans;
};

console.log(fourSumCount4([-1, -1], [-1, 1], [-1, 1], [1, -1]));
