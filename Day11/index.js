
// Activity 1 : Understanding Promises.
console.log("\n Activity 1");
// task-1
const greet = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello Guys");
    }, 2000);
  });
};

greet()
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

// task-2
const isThisNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num === Number) {
      setTimeout(() => {
        resolve("The Input is a Number");
      }, 2000);
    } else {
      reject("Not a Number");
    }
  });
};
isThisNumber(7)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error : ", err);
  });

// Activity 2 : Chaining Promises
console.log("\n Activity 2");
// task-3
function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched data 1");
      resolve("Data 1");
    }, 2000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched data 2");
      resolve("Data 2");
    }, 2000);
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched data 3");
      resolve("Data 3");
    }, 1000);
  });
}

fetchData1()
  .then((result1) => {
    console.log(`Result 1: ${result1}`);
    return fetchData2();
  })
  .then((result2) => {
    console.log(`Result 2: ${result2}`);
    return fetchData3();
  })
  .then((result3) => {
    console.log(`Result 3: ${result3}`);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Activity 3 : Using Async/Await
console.log("\n Activity 3");
// task-4
console.log("... Start ...");
const task = async (t) => {
  return await new Promise((resolve, reject) => {
    if (t) {
      setTimeout(() => {
        resolve("Got it");
      }, 1000);
    } else {
      reject("Oh NO");
    }
  });
};

task(1)
  .then((msg) => {
    console.log("Done : ", msg);
  })
  .catch((err) => {
    console.log(err);
  });


// task-5
let dataSet = fetch("ttps://catalog.data.gov/dataset/meteorite-landings-api").then(()=>{
    console.log("do something");
}).catch((err)=>{
    console.log(err.name);
})


// Activity 4 : Fetching Data from an API
console.log("\n Activity 4");
// task-6
dataSet = fetch("https:jsonplaceholder.typicode.com/users").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});


// task-7
const task7 = async ()=>{
    dataSet = await fetch("https:jsonplaceholder.typicode.com/users").then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}


// Activity 5
// task-8
Promise.all([
    fetchData1(),
    fetchData2(),
    fetchData3()
]).then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})


//task-9
Promise.race([
    fetchData1(),
    fetchData2(),
    fetchData3()
]).then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})


// Feature Request
// ref to the above tasks
