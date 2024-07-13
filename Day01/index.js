// Activity 1 [Variable Declaration]
console.log("\nActivity 1");
var num = 6;
let str = "Hello";
console.log(num);
console.log(str);

// Activity 2 [Constant Declaration]
console.log("\nActivity 2");
const isCorrect = false;
console.log(isCorrect);

// Activity 3 [Data Types]
console.log("\nActivity 3");
const profile = {
  name: "John",
  age: 33,
  beerLover: true,
};
console.log(
  typeof num,
  " ",
  typeof str,
  " ",
  typeof isCorrect,
  " ",
  typeof profile
);

// Activity 4 [Reassigning Variables]
console.log("\nActivity 4");
let isHigh = false;
console.log(`Are you high : ${isHigh}`);
isHigh = true;
console.log(`tell me honestly, are you high : ${isHigh}`);

// Activity 5 [Understanding const]
console.log("\nActivity 5");

try {
    isCorrect = false;
  console.log("works fine");
} catch (error) {
  console.log(error);
}

// Feature Request F1
console.log("\nActivity : F1");
const datatype= (value)=>{
    console.log("Value : ", value);
    console.log("Datatype : ", typeof(value));
}

datatype("Hello");

// Feature Request F2
console.log("\nActivity : F2");
let myLetVariable = 'Initial value';
console.log('Initial value of myLetVariable:', myLetVariable);

myLetVariable = 'Modified value';
console.log('Modified value of myLetVariable:', myLetVariable);

const myConstVariable = 'Initial constant value';
console.log('Initial value of myConstVariable:', myConstVariable);

try {
    myConstVariable = 'Modified constant value';
} catch (error) {
    console.log('Error caught when trying to modify myConstVariable:', error.message);
}
