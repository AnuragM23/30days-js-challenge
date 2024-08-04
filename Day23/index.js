// Activity 1 : Median of Two Sorted Arrays
console.log("\n Activity 1");
// task-1
const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let x = nums1.length;
  let y = nums2.length;
  let low = 0;
  let high = x;

  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    let maxX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    let maxY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

    let minX = partitionX === x ? Number.POSITIVE_INFINITY : nums1[partitionX];
    let minY = partitionY === y ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted.");
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([2], []));

// Activity 2 : Merge k Sorted Lists
console.log("\n Activity 2");
// task-2
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(node) {
    this.heap.push(node);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex].val > this.heap[index].val) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)].val <
          this.heap[smallerChildIndex].val
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index].val > this.heap[smallerChildIndex].val) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  size() {
    return this.heap.length;
  }
}

var mergeKLists = function (lists) {
  let minHeap = new MinHeap();

  for (let list of lists) {
    if (list !== null) {
      minHeap.insert(list);
    }
  }

  let dummy = new ListNode();
  let current = dummy;

  while (minHeap.size() > 0) {
    let node = minHeap.extractMin();
    current.next = node;
    current = current.next;
    if (node.next !== null) {
      minHeap.insert(node.next);
    }
  }

  return dummy.next;
};
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function printLinkedList(node) {
  let arr = [];
  while (node !== null) {
    arr.push(node.val);
    node = node.next;
  }
  console.log(arr.join(" -> "));
}

let lists = [
  createLinkedList([1, 4, 5]),
  createLinkedList([1, 3, 4]),
  createLinkedList([2, 6]),
];
let mergedList = mergeKLists(lists);
printLinkedList(mergedList);


// Activity 3 : Trapping Rain Water
console.log("\n Activity 3");
// task-3
const trap = (height) => {
    if (height.length === 0) return 0;

    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); 
console.log(trap([4,2,0,3,2,5]));            




// Activity 4 : N-Queens
console.log("\n Activity 4");
// task-4
var solveNQueens = function(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isSafe = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    const solve = (row) => {
        if (row === n) {
            solutions.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.';
            }
        }
    };

    solve(0);
    return solutions;
};

console.log(solveNQueens(4));



// Activity 5 : Word Ladder
console.log("\n Activity 5");
// task-5
const ladderLength = (beginWord, endWord, wordList) => {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    while (queue.length > 0) {
        let [word, length] = queue.shift();
        if (word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            for (let char of alphabet) {
                const newWord = word.slice(0, i) + char + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
};

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); 
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]));       



// Feature Requests
// ref to the above tasks