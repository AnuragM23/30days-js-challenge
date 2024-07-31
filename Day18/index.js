// Activity 1 : Sorting Algorithms
console.log("\n Activity 1");
// task-1
let arr = [1, 3, 4, 2, 5];
let len = arr.length;
console.log("Before : ", arr);
for (let i = 0; i < len - 1; i++) {
  for (let j = i + 1; j < len; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("After : ", arr);

//task-2
arr = [1, 3, 4, 2, 5];
const minIndex = (arr, start, end) => {
  let mini = start;
  for (let i = start; i <= end; i++) {
    if (arr[i] < arr[mini]) mini = i;
  }
  return mini;
};
console.log("Before : ", arr);
for (let i = 0; i < len; i++) {
  let mini = minIndex(arr, i, len - 1);
  let temp = arr[mini];
  arr[mini] = arr[i];
  arr[i] = temp;
}
console.log("After : ", arr);

//task-3
const divider = (arr, low, high) => {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};

const quickSort = (arr, low, high) => {
  if (low >= high) return;
  let pi = divider(arr, low, high);

  quickSort(arr, low, pi - 1);
  quickSort(arr, pi + 1, high);
};

arr = [1, 3, 4, 2, 5];
console.log("Before : ", arr);

quickSort(arr, 0, len - 1);
console.log("After : ", arr);




// Activity 2 : Searching Algorithms.
console.log("\n Activity 2");
// task-4
const linearSearch = (arr, target) => {
  for(let i=0; i< arr.length; i++) {
    if(arr[i] == target) return i;
  }
  return -1;
}

console.log("Index of the target Element is : ", linearSearch(arr, 4));

// task-5
const binarySearch = (arr, low, high, target) => {
  if(low > high) return -1;
  let mid = parseInt(low + (high-low)/2);
  if(arr[mid] > target) return binarySearch(arr,low, mid-1, target);
  else if(arr[mid] < target) return binarySearch(arr, mid+1, high, target);
  else return mid;
}
console.log("Index of the target Element is : ", binarySearch(arr, 0, len-1, 3));
console.log("Index of the target Element is : ", linearSearch(arr, 0, len-1, 8));


// Activity 3: String Algorithms

// Task 6: Count Character Occurrences
function countCharacters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
console.log("Character Occurrences:", countCharacters("hello world"));

// Task 7: Longest Substring Without Repeating Characters
function longestSubstringWithoutRepeatingChars(str) {
    let charSet = new Set();
    let left = 0, right = 0;
    let maxLength = 0;
    while (right < str.length) {
        if (!charSet.has(str[right])) {
            charSet.add(str[right]);
            right++;
            maxLength = Math.max(maxLength, right - left);
        } else {
            charSet.delete(str[left]);
            left++;
        }
    }
    return maxLength;
}
console.log("Longest Substring Without Repeating Characters:", longestSubstringWithoutRepeatingChars("abcabcbb"));

// Activity 4: Array Algorithms

// Task 8: Rotate Array by k Positions
function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log("Rotate Array by k Positions:", rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Task 9: Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log("Merge Two Sorted Arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// Activity 5: Dynamic Programming (Optional)

// Task 10: Fibonacci Sequence Using Dynamic Programming
function fibonacciDP(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}
console.log("Fibonacci Sequence (DP):", fibonacciDP(10));

// Task 11: Knapsack Problem Using Dynamic Programming
function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}
console.log("Knapsack Problem (DP):", knapsack([60, 100, 120], [10, 20, 30], 50));

// Feature Requests

// Feature Request 1: Sorting Algorithm Script

// Task 1, 2, 3

// Feature Request 2: Searching Algorithm Script

// Task 4, 5

// Feature Request 3: String Algorithm Script
console.log("Feature Request 3:");
console.log("Character Occurrences:", countCharacters("hello world"));
console.log("Longest Substring Without Repeating Characters:", longestSubstringWithoutRepeatingChars("abcabcbb"));

// Feature Request 4: Array Algorithm Script
console.log("Feature Request 4:");
console.log("Rotate Array by k Positions:", rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log("Merge Two Sorted Arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// Feature Request 5: Dynamic Programming Script
console.log("Feature Request 5:");
console.log("Fibonacci Sequence (DP):", fibonacciDP(10));
console.log("Knapsack Problem (DP):", knapsack([60, 100, 120], [10, 20, 30], 50));
