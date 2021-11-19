// 使用 对象｛｝ 实现一个队列 Chenuvi 21-11-19
export default class Queue<T> {
  private count: number;
  private lowestCount: number;
  private items: any;
  
  constructor() {
    this.init();
  }
  
  init() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  
  enQueue(elem: T) {
    this.items[this.count] = elem;
    this.count++;
  }
  
  deQueue() {
    if (this.isEmpty()) {
      return undefined;
    }
    
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  
  clear() {
    this.items = {};
    this.init();
  }
  
  isEmpty() {
    return this.size() === 0;
  }
  
  size() {
    return this.count - this.lowestCount;
  }
  
}