// Activity 1 [If-else Statements]
console.log("Activity 1");
// task-01
const checker = (num) => {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negetive");
  } else {
    console.log("Zero");
  }
};

checker(0);
checker(1);
checker(-1);
// task-02
const isEligible = (age) => {
  return age >= 18 ? "Eligible" : "Not Eligible";
};
console.log(isEligible(19));
console.log(isEligible(7));

// Activity 2 [Nested if-else Statement]
console.log("\n Activity 2");
const largest = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num2) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

console.log(`lARGEST : ${largest(2, 3, 4)}`);

// Activity 3 [Switch Case]
console.log("\n Activity 3");
// task-04
const dayOfTheWeek = (day) => {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thusday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";

    default:
      return "Invalid Input";
  }
};
console.log("Day :", dayOfTheWeek(3));

// task-05
const grader = (score) => {
  switch (true) {
    case score >= 90 && score <= 100:
      return "A";
    case score >= 75 && score <= 89:
      return "B";
    case score >= 60 && score <= 74:
      return "C";
    case score >= 40 && score <= 59:
      return "D";
    case score < 40 && score >= 0:
      return "F";

    default:
      return "Invalid Input";
  }
};
console.log("Grade : ", grader(70));

// Activity 4 [Conditional(Ternary) Operator]
console.log("\n Activity 4");
const n = 12;
console.log(n % 2 == 0 ? "Even" : "Odd");

// Activity 5 [Combining Conditions]
console.log("\n Activity 5");
const isLeapYear = (year) => {
  if (year % 4 == 0) {
    if (year % 400 == 0) console.log("Leap Year");
    else if (year % 100 == 0) {
      console.log("Not Leap Year");
    } else {
      console.log("Leap Year");
    }
  } else {
    console.log("Not Leap Year");
  }
};
isLeapYear(2000);

// Feature Request
console.log("\n Feature Requests");
// Feature F1
checker(0);
checker(19788);
checker(-101);

// Feature F2
console.log(isEligible(89));
console.log(isEligible(17));

//Feature F3
console.log("Day :", dayOfTheWeek(7));
console.log("Day :", dayOfTheWeek(0));

// Feature F4
console.log("Grade : ", grader(91));
console.log("Grade : ", grader(34));


// Feature F5
isLeapYear(2000);
