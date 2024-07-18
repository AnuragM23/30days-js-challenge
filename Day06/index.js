// Activity 1 : Array Creation and Access
console.log("\n Activity 1");
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
const len = arr1.length;
console.log(`First Element is ${arr1[0]} and Last Element is ${arr1[len-1]}`);


// Activity 2 : Array Methods(Basic)
console.log("\n Activity 2");
arr1.push(0);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift(1);
console.log(arr1);


// Activity 3 : Array Methods (Intermediate)
console.log("\n Activity 3");
const arr2 = [];
arr1.map((element)=>{
    arr2.push(2*element);
});
console.log(arr2);

const isEven = num => (num%2)?false:true;
const arr3=arr1.filter(isEven);
console.log(arr3);

const summation = arr1.reduce((accumulator, element)=>accumulator+element , 0);
console.log(summation);

// Activity 4 : Array Iteration
console.log("\n Activity 4");
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}

arr2.forEach(element => {
    console.log(element);
});


// Activity 5 : Multi-dimensional Arrays 
console.log("\n Activity 5");
const arr4 = [[1,2,3], [4,5,6], [7,8,9]];
console.log(arr4);

console.log(arr4[2][2]);


//Feature Request
// feature 1
console.log("\n feature-1");
const arr5 = [0,0,0,0,0];
console.log(`before ${arr5} and \n after`);
arr5.push(7);
console.log(arr5);
arr5.pop();
console.log(arr5);
arr5.shift();
console.log(arr5);
arr1.unshift(7);
console.log(arr5);

// feature 2
console.log("\n feature-2");
const arr6 = [];
arr1.map((element)=>{
    arr6.push(3*element);
});
console.log(arr2);

const arr7=arr6.filter(isEven);
console.log(arr7);

const product = arr1.reduce((accumulator, element)=>accumulator*element , 1);
console.log(product);


// feature 3
console.log("\n feature-3");
for(let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}

arr6.forEach(element => {
    console.log(element);
});


// feature 4
console.log("\n feature-4");
const matrix = [];
for(let i=0; i<3; i++) {
    matrix.push([1,2,3]);
}
console.log(matrix);

// finding the mid element
const midx = parseInt(matrix[0].length / 2);
const midy = parseInt(matrix.length / 2);
console.log(`Middle Element is ${matrix[midx][midy]}`);

matrix[midx][midy] = 99;
console.log(`Middle Element is changed to ${matrix[midx][midy]}`);
console.log(matrix);


