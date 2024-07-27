import showBooks from './data.js'
import { person, product, summation } from "./module.js";
import * as utils from './module.js'

import {fibonacci} from './fibonacci.js';
import { fetchData } from "./fetchData.js";

// Activity 1 : Creating and Exporting Modules.
console.log("\n Activity 1");
// task-1
console.log(summation(2, 3));
// task-2
console.log(person);
person.sayHi();

 

// Activity 2 : Named and Default Exports
console.log("\n Activity 2");
// task-3
console.log(summation(1,2,3,4,5,6,7,8,9,10));
console.log(product(1,2,3,4,5,6,7,8,9,10));
// task-4
showBooks();



// Activity 3 : Importing Entire Modules
console.log("\n Activity 3");
// task-5
console.log(utils.summation(11,22,33,44,55));
console.log(utils.product(11,2,6));
utils.person.sayHi();



// Activity 4 : Using Third-Party Modules
console.log("\n Activity 4");
// task-6
console.log(fibonacci(40));

// task-7
fetchData();



// Activity 5 : Module Bundling (Optimal)

// task-8
// Check package.json
// in order to run please run "npm run dev" in the terminal.




// Feature Request
// check the above tasks


