// Activity 1:[For Loop]
//task-1
for(let i=1; i<=10; i++){
    console.log(i);
}

// task-2
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}



// Activity 2 : [While Loop]
console.log("\n Activity 2");
//task-3
let counter=1;
let sum = 0;
while(counter <= 10){
    sum += counter;
    counter++;
}
console.log(sum);

//task-4
while(counter != 1){
    console.log(counter-1);
    counter--;
}


// Activity 3 : [Do-While Loop]
console.log("\n Activity 3");
// task-5
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);

// task-6
let fact=1;
num = 1;
do {
    fact *= num;
    num++;
} while (num <= 5);
console.log(fact);



// Activity 4 : [Nested Loops]
console.log("\n Activity 4");
let str = "";
num  = 5;
for(let i=1; i<=num; i++){
    str = "";
    for(let j=1; j<=i; j++){
        str += " *";
    }
    console.log(str);
}



// Activity 5 : [ Loop Control Statements]
console.log("\n Activity 5");
// task-8
for (let i = 1; i <= 10; i++) {
    if(i == 5) continue;
    console.log(i);    
}


// task-9
for (let i = 1; i <= 10; i++) {
    if(i == 7) break;
    console.log(i);    
}





// Feature Request
// Feature f1
for(let i=1; i<=10; i++){
    console.log(i);
}

num=1;
while(num <= 10){
    console.log(num);
    num++;
}


// feature f2
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}


//feature f3
str = "";
num  = 5;
for(let i=1; i<=num; i++){
    str = "";
    for(let j=1; j<=i; j++){
        str += " *";
    }
    console.log(str);
}


// feature f4
counter=1;
sum = 0;
while(counter <= 10){
    sum += counter;
    counter++;
}
console.log(sum);



// feature f5
fact=1;
num = 1;
do {
    fact *= num;
    num++;
} while (num <= 5);
console.log(fact);



