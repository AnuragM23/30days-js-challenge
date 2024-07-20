// Activity 1 : Template Literals
console.log("\n Activity 1");
// task-1
const name = 'John';
const age = 20;
console.log(`Hey there, I an ${name} and I am ${age} years old`);

//task-2
console.log(`Hello, I'm ${name}, currently ${age} years old.\nI love Computer Science and want to build a career out of it.\nI well versed with languages like Java, Python, Javascript and Ruby.`);



// Activity 2 : Destructuring
console.log("\n Activity 2");
// task-3
let arr = [1,2,3,4,5];
const [first, second, , , last] = arr;
console.log(first, second);

// task-4
const book = {
    title:"Harry Porter and the Philosopher's Stone",
    author:"JK Rowling",
    year :1997
}
const bookDetails = ({title, author})=>{
    console.log(`${title} by ${author}`);
}
bookDetails(book);


// Activity 3 : Spread and Rest Operators
console.log("\n Activity 3");
// task-5
console.log(`Old Array : ${arr}`);
console.log(`New Array : ${[...arr, 10]}`);

// task-6
const summation = (...inputs)=>{
    let sum=0;
    for(let i=0; i<inputs.length; i++){
        sum += inputs[i];
    }
    return sum;
}
console.log(summation(1,2,3,4,5));



// Activity 4 : Default Parameters
console.log("\n Activity 4");
// task-7
const product = (a, b=1)=>a*b;
console.log(product(2,3));
console.log(product(5));



// Activity 5 : Enhanced Object Literal
console.log("\n Activity 5");
// task-8
const sayHi = ()=>{
    console.log('Hii');
    console.log('Hello');
}
const person = {
    name,
    age,
    sayHi,
    showDetails:function(){
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
    }
}
person.showDetails();
console.log(person);

//task-9
const key1 = 'Product'
const key2 = 'Company'

const cig = {
    [key1]: 'Navycut',
    [key2] : 'ITC'
}
console.log(cig);




// Feature Request
// feature f1
console.log(`Hello, I'm ${name}, currently ${age} years old.\nI love Computer Science and want to build a career out of it.\nI well versed with languages like Java, Python, Javascript and Ruby.`);

// feature f2
let arr2 = [1,2,3,4,5];
const [i1, i2, , , i5] = arr2;
console.log(i1, i2);

bookDetails(book);

// feature f3
const arr3 = [-1, 0, 1];
console.log(...arr, ...arr3);

console.log(summation(1,2,3,4,5,6));


// feature f4
console.log(product(2,3));
console.log(product(5));


// feature f5
console.log(person);
console.log(cig);


