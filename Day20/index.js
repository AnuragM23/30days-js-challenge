import { getFromLocalStorage, saveToLocalStorage } from "./localStorage";

// Activity 1 : Understanding LocalStorage
console.log("\n Activity 1");
// task-1
let key = 'myString';
let value = 'Hello, world!';
localStorage.setItem(key, value);

let retrievedValue = localStorage.getItem(key);
console.log(retrievedValue);

// task-2
const book = {
    title : "1984",
    author : "George Orwell",
    year: 1949
}
key = "book";
value = JSON.stringify(book);
localStorage.setItem(key, value);
retrievedValue = localStorage.getItem(key);
console.log(retrievedValue);


// Activity 2 : Using LocalStorage
console.log("\n Activity 2");
// task-3
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const displayDiv = document.getElementById('displayData');

    // Retrieve and display saved data on page load
    const savedData = getFromLocalStorage('userData');
    if (savedData) {
        displayDiv.textContent = `Name: ${savedData.name}, Email: ${savedData.email}`;
    }

    // Save data to localStorage on form submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userData = {
            name: nameInput.value,
            email: emailInput.value
        };

        saveToLocalStorage('userData', userData);

        displayDiv.textContent = `Name: ${userData.name}, Email: ${userData.email}`;
    });
});

