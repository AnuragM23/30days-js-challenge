// Activity 1 : Basic Error Handling with Try-Catch.
console.log("\n Activity 1");
// task-1
const NUMBER = 13;
try {
  NUMBER = 69;
  console.log(`Updated : ${NUMBER}`);
} catch (error) {
  console.log("Error Occured : ", error.name);
}

// task-2
const divide = (a, b) => {
  if (b == 0) throw new Error(`the Divider can't be 0`);
  return a / b;
};
try {
  console.log(divide(20, 0));
} catch (error) {
  console.log(error.name);
}

// Activity 2 : Finally Block.
console.log("\n Activity 2");
// task-3
try {
  console.log(divide(20, 10));
} catch (error) {
  console.log(error.name);
} finally {
  console.log("Script Executed.");
}

// Activity 3 : Custom Error Objects.
console.log("\n Activity 3");
// task-4
class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

const isEligible = (age) => {
  if (age < 0 || age > 120) throw new customError("Unrealistic Input");

  if (age >= 18) {
    console.log("eligible");
  } else {
    console.log("not eligible");
  }
};

try {
  isEligible(199);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// task-5
const enterName = (name) => {
  if (name.length == 0) throw new customError("No Input");
  console.log(`Hello ${name}`);
};
try {
  enterName("");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// Activity 4 : Error Handling in Promises.
console.log("\n Activity 4");
// task-6
const isThisNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num === Number) {
      resolve("The Input is a Number");
    } else {
      reject("Not a Number");
    }
  });
};
isThisNumber('700')
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error : ", err);
  });


  // task-7
  function chill() {
    return new Promise((resolve, reject) => {
      const t = Math.random()%2;
      if (t == 1) {
        resolve("Great");
      } else {
        reject(new Error("Sad"));
      }
    });
  }
  
  handleClill = async () => {
    try {
      const result = await chill();
      console.log(result);
    } catch (error) {
      console.error(`Caught an error: ${error.message}`);
    }
  }
  handleClill();




  // Activity 5 : Greatful Error Handling in Fetch.
console.log("\n Activity 5");
// task-8
let dataSet = fetch("ttps://catalog.data.gov/dataset/meteorite-landings-api").then(()=>{
    console.log("do something");
}).catch((err)=>{
    console.log(err.name);
})

// task-9
const something = async ()=>{
    dataSet = await fetch("https:jsonplaceholder.something.com/users").then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err.name);
        console.log(err.message);
    });
}
something();  



// Feature Request
// ref to the above tasks



