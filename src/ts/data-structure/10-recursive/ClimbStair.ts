/**
 * 递归求解爬楼梯问题
 */

/**
 * 最开始版本的递归算法
 * @param n
 */

function climbStair(n: number): any {
  if (n === 1 || n === 2) return n;
  return climbStair(n - 1) + climbStair(n - 2);
}

const res1 = climbStair(10);
// 89
console.log(res1);


/**
 * 使用depth结合js的闭包特性实现限制函数调用次数的功能
 * @param depth 递归的深度
 */

function fnWithDepth(depth: number) {
  return function fn (n: number) : any {
    depth++
    if (depth > 1000) throw new Error(' function stack is too deep! ')
    if (n === 1 || n === 2) return n;
    return fn(n - 1) + fn(n - 2);
  }
}

const res2 = fnWithDepth(3)(10)
// 89
console.log(res2)


/**
 * 通过map来存储已经计算过的值，避免递归重复计算
 */

function fnWithMap() {
  const map = new Map<number,number>()
  return function fn (n: number): any {
    if(map.has(n)) return map.get(n);
    if (n === 1) return 1
    if (n === 2) return 2
    const res = fn(n-1) + fn(n -2)
    map.set(n,res)
    return res
  }
}
const res3 = fnWithMap()(10)
console.log(res3)
