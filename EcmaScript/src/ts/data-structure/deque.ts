// 使用对象来实现一个双端队列
export default class Deque<T> {
  private count: number;
  private lowestCount: number;
  private items: any;
  
  constructor() {
    this.init();
  }
  
  init() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  
  addFront(elem: T) {
    if (this.isEmpty()) {
      this.addBack(elem);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = elem;
    } else {
      // 最后一种场景是lowestCount为0的情况
      // TODO 理解
      for (let i = this.count; i > 0; i--) {
        // 在第一位添加一个新元素，我们需要将所有元素后移一位 ??
        this.items[i] = this.items[i -1]
      }
      this.count++;
      // 在所有的元素都完成移动后，第一位将是空闲状态，这样就可以用需要添加的新元素来覆盖它了
      this.items[0] = elem;
    }
  }
  
  removeFront () {
    if(this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]
    delete  this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  
  addBack(elem: T) {
    this.items[this.count] = elem;
    this.count++;
  }
  
  removeBack() {
    if(this.isEmpty()) {
      return undefined;
    }
    this.count--
    const result = this.items[this.count]
    delete  this.items[this.count]
    return result
  }
  
  isEmpty() {
    return this.size() === 0;
  }
  
  size() {
    return this.count - this.lowestCount;
  }
}