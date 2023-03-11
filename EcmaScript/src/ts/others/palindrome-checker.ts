// 回文字符串校验
import Deque from "../data-structure/deque";

export default function palindromeChecker(string: string) {
  if (!string || string.length === 0) {
    return false;
  }
  
  const deque = new Deque<string>();
  const lowerString = string.toLowerCase().split(' ').join();
  let firstStr: string, lastStr: string;
  
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  
  while (deque.size() > 1) {
    firstStr = deque.removeFront();
    lastStr = deque.removeBack();
    if (firstStr !== lastStr) {
      return false;
    }
  }
  
  return true;
}
