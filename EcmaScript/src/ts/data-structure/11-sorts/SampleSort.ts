/**
 * 简单的排序，分为冒泡和插入排序
 * 注意他们都是稳定的排序,并且是原地排序
 * 一般情况下更推荐使用插入排序，因为它所需要的操作更少
 * 这里使用简单工厂创建我们的排序算法
 */

/**
 * 排序的枚举类型
 */

enum SortType {
  BubbleSort,
  InsertSort,
  SelectSort
}

interface SortAlgo {
  sort(array: number[]): void
}

// 冒泡排序
class BubbleSort implements SortAlgo {
  sort(array: number[]) {
    let flag = false;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          flag = true;
        }
      }
      if (!flag) {
        break;
      }
    }
  }
}

// 插入排序
class InsertSort implements SortAlgo {
  sort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
      let j = i - 1;
      const temp = array[i];
      for (; j > 0; j--) {
        if (array[j] < array[j + 1]) {
          array[j + 1] = array[j];
        } else {
          // 这个说明之前的已经排好了，没必要继续比较
          break;
        }
      }
      array[j + 1] = temp;
    }
  }
}

// 选择排序 https://zhuanlan.zhihu.com/p/123048793
// 选择排序的思想其实和冒泡排序有点类似，都是在一次排序后把最小的元素放到最前面，或者将最大值放在最后面。但是过程不同，冒泡排序是通过相邻的比较和交换。而选择排序是通过对整体的选择，每一趟从前往后查找出无序区最小值，将最小值交换至无序区最前面的位置。
class SelectSort implements SortAlgo {
  sort(array: number[]) {
    if (array.length <= 1) return;
    // 需要注意这里的边界, 因为需要在内层进行 i+1后的循环，所以外层需要 数组长度-1
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
}

class SortFactory {
  static getSortAlgo(type: SortType): SortAlgo {
    switch (type) {
      case SortType.BubbleSort:
        return new BubbleSort();
      case SortType.InsertSort:
        return new InsertSort();
      case SortType.SelectSort:
        return new SelectSort();
      default:
        throw new Error('unknown sort algorithm type');
    }
  }
}


const insertSort = SortFactory.getSortAlgo(SortType.InsertSort);
const test1 = [1, 0, 2, 4, 8, 5, 10];
insertSort.sort(test1);
console.log(test1);
