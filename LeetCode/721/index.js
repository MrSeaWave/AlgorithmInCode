/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// 如果具有相同的邮件则判定为一人，那如果这时候name不同该如何处理？
// 注意交叉邮箱的可能性如input3，4
var accountsMerge = function(accounts) {
  const output = {};
  const emailsSet = {};
  accounts.forEach((item, index) => {
    const key = index + 1;
    const name = item.slice(0, 1);
    const emails = item.slice(1);
    output[key] = { name: name[0], emails: new Set() };
    const findEmails = emails.filter(email => {
      return !!emailsSet[email];
    });
    // 如果没有找到则是新建
    if (!findEmails.length) {
      emails.forEach(email => {
        // 增加索引
        emailsSet[email] = key;
        output[key].emails.add(email);
      });
    } else {
      // 找到最初的索引
      const emailKeys = findEmails.map(email => emailsSet[email]).sort((a, b) => a - b);
      const minKey = emailKeys[0];
      // 将以前所有的email索引都改成最初找到的
      Object.entries(emailsSet).forEach(([email, key]) => {
        if (emailKeys.includes(key)) {
          emailsSet[email] = minKey;
          output[minKey].emails.add(email);
        }
      });
      // 处理当前的emails
      emails.forEach(email => {
        // 增加索引
        emailsSet[email] = minKey;
        output[minKey].emails.add(email);
      });
    }
  });
  const result = [];
  // 索引去重
  new Set(Object.values(emailsSet)).forEach(key => {
    // 按照字典序排序
    result.push([output[key].name, ...[...output[key].emails].sort()]);
  });
  return result;
};

const input = [
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['John', 'johnnybravo@mail.com'],
  ['Mary', 'mary@mail.com']
];
const output = [
  ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
  ['John', 'johnnybravo@mail.com'],
  ['Mary', 'mary@mail.com']
];

const input1 = [
  ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
  ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'],
  ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'],
  ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'],
  ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co']
];
const output1 = [
  ['Ethan', 'Ethan0@m.co', 'Ethan4@m.co', 'Ethan5@m.co'],
  ['Gabe', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe3@m.co'],
  ['Hanzo', 'Hanzo0@m.co', 'Hanzo1@m.co', 'Hanzo3@m.co'],
  ['Kevin', 'Kevin0@m.co', 'Kevin3@m.co', 'Kevin5@m.co'],
  ['Fern', 'Fern0@m.co', 'Fern1@m.co', 'Fern5@m.co']
];
const input2 = [
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['Mary', 'mary@mail.com'],
  ['John', 'johnnybravo@mail.com']
];
const output2 = [
  ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
  ['Mary', 'mary@mail.com'],
  ['John', 'johnnybravo@mail.com']
];
const input3 = [
  ['David', 'David0@m.co', 'David1@m.co'],
  ['David', 'David3@m.co', 'David4@m.co'],
  ['David', 'David4@m.co', 'David5@m.co'],
  ['David', 'David2@m.co', 'David3@m.co'],
  ['David', 'David1@m.co', 'David2@m.co']
];
const output3 = [
  [
    'David',
    'David0@m.co',
    'David1@m.co',
    'David2@m.co',
    'David3@m.co',
    'David4@m.co',
    'David5@m.co'
  ]
];
const input4 = [
  ['David', 'David0@m.co', 'David1@m.co', 'David2@m.co'],
  ['David', 'David3@m.co', 'David4@m.co'],
  ['David', 'David3@m.co', 'David0@m.co'],
  ['David', 'David5@m.co', 'David7@m.co'],
  ['David', 'David5@m.co', 'David0@m.co']
];
const output4 = [
  'David',
  'David0@m.co',
  'David1@m.co',
  'David2@m.co',
  'David3@m.co',
  'David4@m.co',
  'David5@m.co',
  'David7@m.co'
];

console.log(accountsMerge(input));
