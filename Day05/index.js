// Activity 1 : [Function Declaration]
console.log("\n Activity 1");
let n = 6;
function evenOrOdd(num){
    if(num % 2 == 0){
        console.log(`${num} is Even`);
    } else {
        console.log(`${num} is Odd`);
    }
}
evenOrOdd(n);


n=5;
function square(num){
    return num*num;
}
console.log(`square of ${n} is ${square(n)}`);


// Activity 2 : [Function Expression]
console.log("\n Activity 2");
function maxi(a, b){
    return (a>b)?a:b;
}
console.log(maxi(2,3));


function concatinate(str1, str2){
    return str1+str2;
}
console.log(concatinate("Hello", "World"));


// Activity 3 : [Arrow Function]
console.log("\n Activity 3");
const summation=(a, b)=>a+b;
console.log(summation(2,4));

const charPresent = (str, ch)=>{
    str = str.toLowerCase();
    ch = ch.toLowerCase().charAt(0);
    let len = str.length;
    for(let i=0; i<len; i++){
        if(str[i] == ch) return true;
    }
    return false;
}
console.log(charPresent('anurag', 'pa'));



// Activity 4 : [Functional Parameters and Default Value]
console.log("\n Activity 4");
const product = (a, b=1)=>a*b;
console.log(product(4, 11));
console.log(product(5));

const greet = (name, age=18)=>{
    console.log(`Hello ${name}, You Must be ${age} now.`);
}
greet('Anurag', 20);
greet('Narayan');



// Activity 5 : [Higher Order Functions]
console.log("\n Activity 5");
n=5;
const repeter = (n)=>{
    console.log(`called ${n} time`);
}
const rec = (callback, n)=>{
    let i=1;
    while(i<=n){
        callback(i);
        i++;
    }
}
rec(repeter, n);

const factorial=(n)=>{
    let fact=1;
    for(let i=1; i<=n; i++){
        fact *= i;
    }
    return fact;
}

const printer = (s) =>{ console.log(s);}

const task = (func1, func2, k)=>{
    func2(func1(k));
}
task(factorial, printer, 5);





// Feature Request
console.log("\n Feature Requests");
// Feature F1
evenOrOdd(5);
evenOrOdd(4);

// Feature F2
console.log(`square of ${n} is ${square(9)}`);
console.log(`square of ${n} is ${square(15)}`);

//Feature F3
console.log(concatinate("Late ", "Joy Lobo"));

// Feature F4
console.log(summation(2,98));

// Feature F5
rec(repeter, 3);