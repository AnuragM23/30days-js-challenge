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


// Activity 3 : String Algorithm
console.log("\n Activity 3");
// task-6

