// Activity 1 : Add Two Numbers
console.log("\n Activity 1");
// task-1
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;
    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
};

function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummyHead.next;
}
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);

function printLinkedList(node) {
    let arr = [];
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }
    console.log(arr.join(' -> '));
}

printLinkedList(result);




// Activity 2 : Longest Substring Without Repeating Characters
console.log("\n Activity 2");
// task-2
const lengthOfLongestSubstring = (s) => {
    let n = s.length;
    let set = new Set();
    let maxLength = 0, i = 0, j = 0;

    while (i < n && j < n) {
        if (!set.has(s.charAt(j))) {
            set.add(s.charAt(j++));
            maxLength = Math.max(maxLength, j - i);
        } else {
            set.delete(s.charAt(i++));
        }
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); 
console.log(lengthOfLongestSubstring("bbbbb"));    
console.log(lengthOfLongestSubstring("pwwkew"));   
console.log(lengthOfLongestSubstring(""));




// Activity 3 : Container With Most Water
console.log("\n Activity 3");
// task-3
var maxArea = (height) => {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let currentArea = width * minHeight;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); 
console.log(maxArea([1,1]));              
console.log(maxArea([4,3,2,1,4]));       
console.log(maxArea([1,2,1]));



// Activity 4 : 3Sum
console.log("\n Activity 4");
// task-4

const threeSum = (nums) => {
    let results = [];
    nums.sort((a, b) => a - b); 

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; 

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; 
                while (left < right && nums[right] === nums[right - 1]) right--; 
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return results;
};

console.log(threeSum([-1,0,1,2,-1,-4])); 
console.log(threeSum([]));               
console.log(threeSum([0,0,0]));        


// Activity 5 : Group Anagrams
console.log("\n Activity 5");
// task-5
const groupAnagrams = (strs) => {
    let map = new Map();
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); 
console.log(groupAnagrams([""])); 
console.log(groupAnagrams(["a"])); 


// Feature Requests
// ref to the above tasks