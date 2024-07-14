//Activity 1 [Arithmetic Operator]
console.log("\n Activity 1");
console.log("'1' to add");
console.log("'2' to subtract");
console.log("'3' to multiply");
console.log("'4' to divide");
console.log("'5' for remainder");

const calculation = (a, b, operation)=>{
    switch (operation) {
        case 1:
            return a+b;
        case 2:
            return a-b;
        case 3:
            return a*b;
        case 4:
            return a/b;
        case 5:
            return a%b;
    
        default:
            console.log('Invalid Input');
            return -1;
    }
}

console.log(calculation(4, 3, 1));
console.log(calculation(4, 3, 2));
console.log(calculation(4, 3, 3));
console.log(calculation(4, 3, 4));
console.log(calculation(4, 3, 5));
console.log(calculation(4, 3, -1));



// Activity 2 [Assignment Operators]
console.log("\n Activity 2");
let num = 10;
num += 3;
console.log(num);
num-=3;
console.log(num);



// Activity 3 [Comparison Operator]
console.log("\n Activity 3");
console.log(3>4);
console.log(3<4);

console.log(5>=4);
console.log(5<=4);
console.log(5<=5);

console.log(3 == 4);
console.log(3 == '3');
console.log(3 === '3');
console.log(3 === 3);



// Activity 4 [Logical Operator]
console.log("\n Activity 4");
const obj = {
    name : "Ram",
    age : 18
}
console.log(obj.age === 18  && obj.name === "Ram");
console.log(obj.age === 18  && obj.name === "Hari");
console.log(obj.age === 17  && obj.name === "Ram");


console.log(obj.age === 18  || obj.name === "Ram");
console.log(obj.age === 18  || obj.name === "Hari");
console.log(obj.age === 17  || obj.name === "Ram");


console.log(!(2 === 3));
console.log(!(2===2));



// Activity 5 [Ternary Operator]
console.log("\n Activity 5");
const n = 12;
console.log((n>=0)? "Positive": "Negetive");




// Feature Request
// F1
console.log("\n Feature F1");
console.log(calculation(5, 3, 1));
console.log(calculation(5, 3, 2));
console.log(calculation(5, 3, 3));
console.log(calculation(5, 3, 4));
console.log(calculation(5, 3, 5));
console.log(calculation(5, 3, -1));


// F2
console.log("\n Feature F2");
console.log("'&' to and");
console.log("'|' to or");
console.log("'!' to negate");
const logicalCalculation = (a, b, operator)=>{
    switch (operator) {
        case '&':
            return a&&b;
        case '|':
            return a||b;
        case '!':
            return !(a&&b);      
    
        default:
            console.log('Invalid Input');
            return -1;
    }
}

console.log(logicalCalculation(true, false, '&'));
console.log(logicalCalculation(true, false, '|'));
console.log(logicalCalculation(true, false, '!'));



// F3
console.log("\n Feature F3");
const neg = -12;
console.log((neg>=0)? "Positive": "Negetive");


