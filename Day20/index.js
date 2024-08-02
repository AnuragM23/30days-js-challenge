// Activity 1 : Understanding LocalStorage
console.log("\n Activity 1");
// task-1
let key = "myString";
let value = "Hello, world!";
localStorage.setItem(key, value);

let retrievedValue = localStorage.getItem(key);
console.log(retrievedValue);

// task-2
const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
};
key = "book";
value = JSON.stringify(book);
localStorage.setItem(key, value);
retrievedValue = localStorage.getItem(key);
console.log(retrievedValue);

// Activity 2 : Using LocalStorage
console.log("\n Activity 2");
// task-3
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#localUserForm");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    displayLocalStorageData();
  });

  const displayLocalStorageData = () => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    if (name && email) {
      document.querySelector(
        "#displayLocalData"
      ).textContent = `Name: ${name}, Email: ${email}`;
    }
  };
  displayLocalStorageData();
});

// task-4
localStorage.setItem("danger", "BUG found, need to be removed");
console.log("Before:", localStorage.getItem("danger"));
localStorage.removeItem("danger");
console.log("After:", localStorage.getItem("danger"));

// Activity 3 : Understanding SessionStorage
console.log("\n Activity 3");
// task-5
sessionStorage.setItem("strSession-1", "Hello Guys");
console.log(sessionStorage.getItem("mySessionString"));

// task-6
const objSession = {
  username: "ben-tenison",
  otaku: true,
  favAnime: "Attack on Titan",
};
sessionStorage.setItem("objSession", JSON.stringify(objSession));
const retrieveObj = JSON.parse(sessionStorage.getItem("objSession"));
console.log(retrieveObj);

// Activity 4 : Using SessionStorage
console.log("\n Activity 4");
// task-7
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#SessionUserForm");
  const nameInput = document.querySelector("#sessionName");
  const emailInput = document.querySelector("#sessionEmail");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    sessionStorage.setItem("sessionName", name);
    sessionStorage.setItem("sessionEmail", email);
    displaySessionStorageData();
  });

  const displaySessionStorageData = () => {
    const name = sessionStorage.getItem("sessionName");
    const email = sessionStorage.getItem("sessionEmail");
    if (name && email) {
      document.querySelector(
        "#displaySessionData"
      ).textContent = `Name: ${name}, Email: ${email}`;
    }
  };
  displaySessionStorageData();
});

// task-8
sessionStorage.setItem("danger", "BUG detected, need to be removed");
console.log("Before :", sessionStorage.getItem("danger"));
sessionStorage.removeItem("danger");
console.log("After:", sessionStorage.getItem("danger"));

// Activity 5 : Comparing LocalStorage and SessionStorage
console.log("\n Activity 5");
// task-9
const saveToBothStorages = (key, value) => {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log('LocalStorage:', localStorage.getItem(key));
    console.log('SessionStorage:', sessionStorage.getItem(key));
};
saveToBothStorages('FBI', 'Open the Door !');

// task-10
const clearBothStorages = () => {
    localStorage.clear();
    sessionStorage.clear();
    console.log('LocalStorage cleared:', localStorage.length === 0);
    console.log('SessionStorage cleared:', sessionStorage.length === 0);
};
clearBothStorages();