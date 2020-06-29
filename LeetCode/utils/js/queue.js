/**
 * @desc 优先队列
 * */
const { MaxHeap } = require('./heap');

class PriorityQueue {
  // max 为优先队列的容量
  constructor(max, compare) {
    this.max = max;
    this.compare = compare;
    this.maxHeap = new MaxHeap([], compare);
  }

  getSize() {
    return this.maxHeap.getSize();
  }

  isEmpty() {
    return this.maxHeap.isEmpty();
  }

  getFront() {
    return this.maxHeap.findMax();
  }

  enqueue(e) {
    // 比当前最高的优先级的还要高，直接不处理
    if (this.getSize() === this.max) {
      if (this.compare(e, this.getFront())) return;
      this.dequeue();
    }
    return this.maxHeap.add(e);
  }

  dequeue() {
    if (this.getSize() === 0) return null;
    return this.maxHeap.extractMax();
  }
}

module.exports = { PriorityQueue };
