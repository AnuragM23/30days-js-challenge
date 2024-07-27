// Activity 1 : Understanding Closures.
console.log("\n Activity 1 ");
// task-1
function outer() {
    let txt = "Hello Guys!";

    function inner() {
        return txt;
    }

    return inner;
}
console.log(outer()());

// task-2
const counter = ()=>{
    let count=0;
    return {
        increment : function(){
            count++;
        },
        getCountValue : function(){
            return count;
        }
    };
}
const myCounter = counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCountValue());




// Activity 2 : Practical Closures.
console.log("\n Activity 2 ");
// task-3
const generateUniqueId = ()=>{
    let prevId=10000;
    const generateNewId = ()=>{
        return ++prevId;
    }
    return generateNewId;
}

const myIdGenerator = generateUniqueId();
console.log(myIdGenerator());
console.log(myIdGenerator());
console.log(myIdGenerator());

// task-4
const greeter = (name) => {
    return ()=>{
        return `Hello ${name}`;
    };
}
console.log(greeter('Harry')());




// Activity 3 : Closures in Loops.
console.log("\n Activity 3 ");
// task-5
let funcArr = [];

for (let i = 0; i < 5; i++) {
    funcArr.push(((index) => {
        return () => {
            console.log(index);
        };
    })(i));
}

for (let i = 0; i < funcArr.length; i++) {
    funcArr[i]();
}




// Activity 4 : Module Pattern.
console.log("\n Activity 4 ");
// task-6
const cart = () => {
    let items = [];

    return {
        addItem: (item) => {
            items.push(item);
            console.log(`${item} added.`);
        },
        removeItem: (item) => {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },
        listItems: () => {
            console.log("Items:", items);
            return items;
        }
    };
};
const myCart = cart();
myCart.addItem("apple");
myCart.addItem("banana");
myCart.addItem('Coffee')
myCart.listItems(); 
myCart.removeItem("apple");
myCart.listItems(); 




// Activity 5 : Memoization.
console.log("\n Activity 5 ");
function memoize(fn) {
    const cache = {};

    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

// task-7
const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(5)); 
console.log(memoizedFibonacci(0)); 
console.log(memoizedFibonacci(10));


// task-8
const factorial = (n) =>{
    if(n==1 || n==0) return 1;
    return n*factorial(n-1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(1));
console.log(memoizedFactorial(10));





// Feature Request
// ref to the abov









