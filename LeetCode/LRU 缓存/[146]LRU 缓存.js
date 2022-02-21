//请你设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。
//
// 实现 LRUCache 类：
//
//
//
//
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组
//key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
//
//
// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
//
//
//
//
//
// 示例：
//
//
//输入
//["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
//[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
//输出
//[null, null, null, 1, null, -1, null, -1, 3, 4]
//
//解释
//LRUCache lRUCache = new LRUCache(2);
//lRUCache.put(1, 1); // 缓存是 {1=1}
//lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
//lRUCache.get(1);    // 返回 1
//lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
//lRUCache.get(2);    // 返回 -1 (未找到)
//lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
//lRUCache.get(1);    // 返回 -1 (未找到)
//lRUCache.get(3);    // 返回 3
//lRUCache.get(4);    // 返回 4
//
//
//
//
// 提示：
//
//
// 1 <= capacity <= 3000
// 0 <= key <= 10000
// 0 <= value <= 10⁵
// 最多调用 2 * 10⁵ 次 get 和 put
//
// Related Topics 设计 哈希表 链表 双向链表 👍 1931 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} capacity
 */
// 队列版本超时
// var LRUCache = function (capacity) {
//   this.cache = {};
//   this.queue = [];
//   this.capacity = capacity;
// };
//
// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//   if (this.cache[key] !== undefined) {
//     // 更新队列
//     this.queue = this.queue.filter((k) => k !== key);
//     this.queue.push(key);
//     return this.cache[key];
//   } else {
//     return -1;
//   }
// };
//
// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//   if (this.cache[key] !== undefined) {
//     this.queue = this.queue.filter((k) => k !== key);
//   }
//   // 更新缓存
//   this.cache[key] = value;
//   //  更新队列
//   this.queue.push(key);
//   if (this.queue.length > this.capacity) {
//     const delKey=this.queue.shift();
//     this.cache[delKey]=undefined
//   }
// };

// 直接使用map方法当做缓存，且可以有顺序
// https://juejin.cn/post/7065183597254148104
class LRUCache_1 {
  constructor(capacity) {
    this.cache = new Map();
    this.max = capacity;
  }
  get(key) {
    if (this.cache.has(key)) {
      let value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);

    if (this.cache.size > this.max) {
      // 取出第一个插入的数据
      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

// O(1) 解法双向链表
class LRUNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;

    this.pre = null;
    this.next = null;
  }
}

// 链表，头部权重最大
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.max = capacity;

    this.head = null;
    this.tail = null;
  }

  get(key) {
    const node = this.cache.get(key);
    if (!node) return -1;
    this._removeNode(node);
    this._appendHead(node);
    return node.val;
  }

  put(key, value) {
    const node = this.cache.get(key);
    if (node) {
      // 如果有缓存,更新节点，更新头部
      node.val = value;
      this._removeNode(node);
      this._appendHead(node);
    } else {
      //  如果没有缓存
      const newNode = new LRUNode(key, value);
      if (this.cache.size >= this.max) {
        //  如果超出容量
        //  移除尾部
        this.cache.delete(this.tail.key);
        this._removeNode(this.tail);
        this._appendHead(newNode);
        this.cache.set(key, newNode);
      } else {
        //  未超出容量，在头部新增
        this._appendHead(newNode);
        this.cache.set(key, newNode);
      }
    }
  }

  // 移除当前节点
  _removeNode(node) {
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      // node 在头部
      if (this.head === node) {
        this.head = node.next;
        node.next = null;
      } else if (this.tail === node) {
        //  node 在尾部
        this.tail = node.pre;
        this.tail.next = null;
        node.pre = null;
      } else {
        //  node 在中间
        node.pre.next = node.next;
        node.next.pre = node.pre;
        node.pre = node.next = null;
      }
    }
  }

  //  头部增加一个新节点，越在上面权重越大，越最后移除
  _appendHead(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.pre = node;
      this.head = node;
    }
  }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
//leetcode submit region end(Prohibit modification and deletion)

const lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // 缓存是 {1=1}
// console.log('lRUCache.put(1, 1)',lRUCache.queue)
console.log(lRUCache.put(2, 2)); // 缓存是 {1=1, 2=2}
// console.log('lRUCache.put(2, 2)',lRUCache.queue)

console.log(lRUCache.get(1)); // 返回 1
// console.log('lRUCache.get(1)',lRUCache.queue)

console.log(lRUCache.put(3, 3)); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// console.log('lRUCache.put(3, 3)',lRUCache.queue)

console.log(lRUCache.get(2)); // 返回 -1 (未找到)
// console.log('queue',lRUCache.queue)

console.log(lRUCache.put(4, 4)); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// console.log('lRUCache.put(4, 4)',lRUCache.queue)

console.log(lRUCache.get(1)); // 返回 -1 (未找到)
// console.log('queue',lRUCache.queue)

console.log(lRUCache.get(3)); // 返回 3
// console.log('queue',lRUCache.queue)

console.log(lRUCache.get(4)); // 返回 4
// console.log('queue',lRUCache.queue)
