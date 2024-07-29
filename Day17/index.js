// Activity 1 : Linked List
console.log("\n Activity 1");
// task-1
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

const displayLL = (current) => {
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};
let current = node1;
displayLL(current);

// task-2
class LinkedList {
  constructor() {
    this.head = null;
  }

  addNodeToEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeNodeFromEnd() {
    if (this.head === null) {
      console.log("List is empty.");
      return;
    }

    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }

  displayNodes() {
    if (this.head === null) {
      console.log("List is empty.");
      return;
    }

    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.addNodeToEnd(1);
list.addNodeToEnd(2);
list.addNodeToEnd(3);

console.log("List after adding nodes:");
list.displayNodes();

list.removeNodeFromEnd();
console.log("List after removing a node:");
list.displayNodes();

// Activity 2 : Stack
console.log("\n Activity 2");
// task-3
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Top element is:", stack.peek());
console.log("Popped element:", stack.pop());
console.log("Top element after pop is:", stack.peek());
stack.pop();
stack.pop();
console.log("Top element after popping all elements:", stack.peek());

// task-4
const str = new Stack();
const s = "hello";
let revStr = "";
for (let i = 0; i < s.length; i++) {
  str.push(s[i]);
}

for (let i = 0; i < s.length; i++) {
  revStr = revStr + str.peek();
  str.pop();
}
console.log(revStr);

// Activity 3 : Queue
console.log("\n Activity 3");
// task-5
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
    } else {
      console.log("Queue elements are:", this.items.join(", "));
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log("Front element is:", queue.front());

console.log("Dequeued element:", queue.dequeue());
console.log("Front element after dequeue is:", queue.front());
queue.dequeue();
queue.dequeue();
console.log("Front element after dequeuing all elements:", queue.front());
queue.printQueue();

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addPrintJob(job) {
    console.log(`Adding print job: ${job}`);
    this.queue.enqueue(job);
  }

  processPrintJob() {
    if (this.queue.isEmpty()) {
      console.log("No print jobs to process.");
    } else {
      const job = this.queue.dequeue();
      console.log(`Processing print job: ${job}`);
    }
  }

  viewQueue() {
    this.queue.printQueue();
  }
}

const printerQueue = new PrinterQueue();

printerQueue.addPrintJob("Document1.pdf");
printerQueue.addPrintJob("Image2.png");
printerQueue.addPrintJob("Spreadsheet3.xlsx");

console.log("\nCurrent queue:");
printerQueue.viewQueue();

console.log("\nProcessing jobs:");
printerQueue.processPrintJob();
printerQueue.processPrintJob();

console.log("\nCurrent queue after processing some jobs:");
printerQueue.viewQueue();

printerQueue.processPrintJob();
printerQueue.processPrintJob();

// Activity 4 : Binary Tree
console.log("\n Activity 4");
// task-7
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
const leftChild = new TreeNode(2);
const rightChild = new TreeNode(3);

root.left = leftChild;
root.right = rightChild;

console.log("Root node value:", root.value);
console.log("Left child value:", root.left.value);
console.log("Right child value:", root.right.value);

// task-8
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal() {
    this._inOrderTraversalNode(this.root);
  }

  _inOrderTraversalNode(node) {
    if (node !== null) {
      this._inOrderTraversalNode(node.left);
      console.log(node.value);
      this._inOrderTraversalNode(node.right);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

console.log("In-order traversal:");
binaryTree.inOrderTraversal();

// Activity 5 : Graph (Optional)
console.log("\n Activity 5");
// task-9
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  bfs(start) {
    if (!this.adjacencyList[start]) {
      console.log("Start vertex not found.");
      return;
    }

    const queue = [start];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      console.log(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
  }
  bfsShortestPath(start, target) {
    if (!this.adjacencyList[start] || !this.adjacencyList[target]) {
      console.log("Start or target vertex not found.");
      return null;
    }

    const queue = [[start]];
    const visited = new Set();
    visited.add(start);

    while (queue.length) {
      const path = queue.shift();
      const vertex = path[path.length - 1];

      if (vertex === target) {
        return path;
      }

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          const newPath = [...path, neighbor];
          queue.push(newPath);
        }
      });
    }

    console.log("No path found between the given vertices.");
    return null;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log("BFS starting from vertex A:");
graph.bfs("A");

// task-10
console.log("Shortest path from A to E:");
const shortestPath = graph.bfsShortestPath("A", "E");
if (shortestPath) {
  console.log(shortestPath.join(" -> "));
}


// Future Requests
// ref to the above tasks

