export default class Stack<T> {
  private count: number;
  private items: any;
  
  constructor() {
    this.count = 0;
    this.items = {};
  }
  
  push(elem: T) {
    this.items[this.count] = elem;
    this.count++;
  }
  
  pop() {
    if (!this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  
  isEmpty() {
    return this.count === 0;
  }
  
  peek() {
    if (!this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  
  size () {
    return this.count
  }
  
  clear () {
    // while(this.count){
    //   this.pop()
    // }
    
    this.count = 0
    this.items = {}
  }
  
  toString() {
    // TODO  the result of objString
    if(!this.isEmpty()){
      return '';
    }
    let objString = `${this.items[0]}`
    for (let i=1;i<this.count;i++){
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}