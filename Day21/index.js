// Activity 1 : Two Sum
console.log("\n Activity 1");
// task-1
const hash = new Map();
let arr = [4, 1, 2, 3, 5];
let ans = [-1, -1];
const Twosum = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (hash.has(num - arr[i])) {
      ans[0] = Math.min(i, hash.get(num - arr[i]));
      ans[1] = Math.max(i, hash.get(num - arr[i]));
      return ans;
    } else {
      hash.set(arr[i], i);
    }
  }
  return ans;
};
console.log(Twosum(arr, 7));

// Activity 2 : Reverse Interger
console.log("\n Activity 2");
// task-2
const reverseInterger = (num) => {
  if (num === 0) return 0;
  const sign = num >= 0 ? 1 : -1;
  num = num * sign;
  while (num % 10 === 0) {
    num = parseInt(num / 10);
  }
  let rev = 0;
  while (num !== 0) {
    const digit = num % 10;
    num = parseInt(num / 10);
    rev = rev * 10 + digit;
  }
  return rev * sign;
};
console.log(reverseInterger(-123));
console.log(reverseInterger(2100));
console.log(reverseInterger(0));

// Activity 3 : Palindrome Number
console.log("\n Activity 3");
// task-3
const isPalindrome = (num) => {
  if (num < 0) return false;
  const str = String(num);
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] != str[j]) return false;
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome(1221));
console.log(isPalindrome(200));
console.log(isPalindrome(7777));
console.log(isPalindrome(0));

// Activity 4 : Merge Two Sorted Lists
console.log("\n Activity 4");
// task-4
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let current = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 !== null ? l1 : l2;
  return dummy.next;
}
function arrayToList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(list) {
  let result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  return result;
}

const l1 = arrayToList([1, 2, 4, 7]);
const l2 = arrayToList([1, 3, 5, 6]);
console.log(listToArray(mergeTwoLists(l1, l2)));

// Activity 5 : Valid Parentheses.
console.log("\n Activity 5");
// task-5
function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of s) {
    if (map[char]) {
      stack.push(char);
    } else if (stack.length === 0 || map[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));

// Feature Requests
// ref to the above tasks
