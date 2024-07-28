// Activity 1 : Basic Recursion.
console.log("\n Activity 1");
// task-1
const factorial = (n) => {
  if (n < 0) {
    return "Invalid Input";
  }
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));
console.log(factorial(-5));
console.log(factorial(0));

// task-2
const fibonacci = (n) => {
  if (n < 0) {
    return "Invalid Input";
  }
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(5));
console.log(fibonacci(-5));
console.log(fibonacci(0));

// Activity 2 : Recursion with Arrays.
console.log("\n Activity 2");
// task-3
const summation = (index, arr) => {
  if (index < 0) return "Invalid Input";
  if (index == 0) return arr[index];
  return arr[index] + summation(index - 1, arr);
};
let arr = [1, 2, 3, 4, 21, 5, 6, 7];
console.log(summation(arr.length - 1, arr));
console.log(summation(arr.length - 4, arr));
console.log(summation(-1, arr));

// task-4
const maxElement = (index, max, arr) => {
  if (index < 0) return "Invalid Input";
  if (index == 0) {
    return arr[index] > max ? arr[index] : max;
  }
  return maxElement(index - 1, arr[index] > max ? arr[index] : max, arr);
};
console.log(maxElement(arr.length - 1, Number.MIN_SAFE_INTEGER, arr));

// Activity 3 : String Manipulation with Recursion.
console.log("\n Activity 3");
// task-5
const reverseString = (index, str) => {
  if (index === str.length - 1) return str[index];
  return reverseString(index + 1, str) + str[index];
};
console.log(reverseString(0, "hellokitty"));

// task-6
const checkPalindrome = (startIndex, endIndex, str) => {
  if (startIndex > endIndex) return true;
  if (str[startIndex] === str[endIndex]) {
    return checkPalindrome(startIndex + 1, endIndex - 1, str);
  } else {
    return false;
  }
};
let str = "abaxaba";
console.log(checkPalindrome(0, str.length - 1, str));
str = "adsfkjasd";
console.log(checkPalindrome(0, str.length - 1, str));

// Activity 4 : Recursive Search.
console.log("\n Activity 4");
// task-7
const binarySearch = (arr, low, high, target) => {
  if (low > high) return -1;
  let mid = parseInt(low + (high - low) / 2);
  if (arr[mid] > target) {
    return binarySearch(arr, low, mid - 1, target);
  } else if (arr[mid] < target) {
    return binarySearch(arr, mid + 1, high, target);
  } else {
    return mid;
  }
};
arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
console.log(binarySearch(arr, 0, arr.length - 1, 9));
console.log(binarySearch(arr, 0, arr.length - 1, 6));

// task-8
const counter = (arr, index, count, target) => {
  if (index >= arr.length) {
    return count;
  }
  return counter(
    arr,
    index + 1,
    arr[index] === target ? count + 1 : count,
    target
  );
};
arr = [1, 2, 3, 4, 2, 3, 8, 2, 3];
console.log(counter(arr, 0, 0, 10));

// Activity 5 : Tree Traversal.
console.log("\n Activity 5");
// task-9
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  create(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const addSide = (side) => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      }
      current = current[side];
    };

    while (true) {
      if (val === current.val) return this;
      if (val < current.val) addSide("left");
      else addSide("right");
    }
  }
  BFS() {
    let visited = [],
      queue = [],
      current = this.root;

    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      visited.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return visited;
  }
  
}

/**
                   20
                 /    \
               14      57
              /  \    /   \
            9    19  31    62
           / \               \
          3   11              72
*/
const tree = new BST();
tree.create(20);
tree.create(14);
tree.create(57);
tree.create(9);
tree.create(19);
tree.create(31);
tree.create(62);
tree.create(3);
tree.create(11);
tree.create(72);

console.log(tree.BFS());



// Feature Request.
// ref the above tasks.
