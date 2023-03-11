// 循环队列 模拟 击鼓传花游戏
import Queue from "../data-structure/queue";
export function hotPotato(elementsList: any[], num: number) {
  const queue = new Queue();
  const eliminatedList = [];
  
  for (let i = 0; i < elementsList.length; i++) {
    queue.enQueue(elementsList[i]);
  }
  
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // 从队列开头移除一项，再将其添加到队列末尾
      queue.enQueue(queue.deQueue());
    }
    // 从队列中移除
    eliminatedList.push(queue.deQueue());
  }
  
  return {
    eliminated: eliminatedList,
    winner: queue.deQueue()
  };
}