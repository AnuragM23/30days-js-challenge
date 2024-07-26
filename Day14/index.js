// Activity 1 : Class Defination.
console.log("\n Activity 1");
// task-1
class Person {
    
    constructor(name, age){
        this.name = name;
        this.age = age;
        
    }
    sayHi(){
        console.log(`Hello, this is ${this.name}, ${this.age} years old. Nice to meet you.`);
    }
}
const p1 = new Person('Robin', 21);
const p2 = new Person('John', 20);
p1.sayHi();
p2.sayHi();

// task-2
Person.prototype.updateAge = function(age){
    this.age = age;
}

p1.updateAge(18);
p1.sayHi();



// Activity 2 : Class Inheritance.
console.log("\n Activity 2");
// task-3 and task-4
class Student extends Person{
    static objCount = 0;
    constructor(name, studentID){
        super(name);
        this.studentID = studentID;
        Student.objCount++;
    }
    getStudentID(){
        return this.studentID;
    }
    sayHi(){
        console.log(`Hello, this is ${this.name}, ${this.age}years old, with the StudentID of ${this.studentID}. Nice to meet you.`);
    }
}

const s1 = new Student('Robin', 1001);
console.log(s1.getStudentID());
p1.sayHi(); // Before Overriding.
s1.sayHi(); // After Overriding.



// Activity 3 : Static Methods and Properties.
console.log("\n Activity 3");
// task-5
Person.micTesting =  function(){
    console.log('Hello Hello Hello');
}
Person.micTesting();

// task-6
console.log(Student.objCount);



// Activity 4 : Getters and Setters.
console.log("\n Activity 4");
// task-7 and task-8

Person.prototype.firstName = function(firstName){
    this.firstName = firstName;
}
Person.prototype.lastName = function(lastName){
    this.lastName = lastName;
}
Person.prototype.getFullName = function(){
    return  this.firstName+" "+this.lastName;
}

Person.prototype.setFirstName = function(name){
    this.firstName = name;
}
Person.prototype.setLastName = function(name){
    this.lastName = name;
}

p1.setFirstName('Bill');
p1.setLastName('Jax');
console.log(p1.getFullName());



// Activity 5 : Private Field (Optional).
console.log("\n Activity 5");
// task-9 and task-10
class Account{
    #balance=0;
    withdraw(amt){
        if(amt > this.#balance){
            console.log("Balance not Avialable to Withdraw");
            return;
        }
        this.#balance -= amt;
    };
    deposit(amt){
        this.#balance += amt;
    };
    showBalence(){
        return this.#balance;
    }
    
}

const a1 =new Account();
a1.deposit(100000);
console.log(a1.showBalence());
a1.withdraw(20000);
console.log(a1.showBalence());
a1.withdraw(2000000000);


// Feature Requests 
// ref to the above tasks


