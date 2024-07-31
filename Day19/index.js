// Activity 1 : Basic Regular Expressions
console.log("\n Activity 1");
// task-1
let text = "Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level, and making sure you are comfortable with JavaScript's purpose.";
let regex = /JavaScript/g;
let matches = text.match(regex);
console.log(matches);

// task-2
text = "World War 2 began in Europe on 1 September 1939 with the German invasion of Poland and the United Kingdom and France's declaration of war on Germany two days later on 3 September 1939. Dates for the beginning of the Pacific War include the start of the Second Sino-Japanese War on 7 July 1937 or the earlier Japanese invasion of Manchuria, on 19 September 1931. Others follow the British historian A. J. P. Taylor, who stated that the Sino-Japanese War and war in Europe and its colonies occurred simultaneously, and the two wars became World War 2 in 1941. Other theorised starting dates for World War II include the Italian invasion of Abyssinia on 3 October 1935. The British historian Antony Beevor views the beginning of World War II as the Battles of Khalkhin Gol fou8t between Japan and the forces of Mongolia and the Soviet Union from May to September 1939. Others view the Spanish Civil War as the start or prelude to World War.End";
regex = /\d+/g;
matches = text.match(regex);
console.log(matches);



// Activity 2 : Character Classes and Quantifiers.
console.log("\n Activity 2");
// task-3
regex = /\b[A-Z][a-z]*\b/g;
matches = text.match(regex);

console.log(matches);


// task-4
regex = /\d+/g;
matches = text.match(regex);
console.log(matches);



// Activity 3 : Grouping and Capturing
console.log("\n Activity 3");
// task-5
const phone = "(123) 456-7890";
regex = /\((\d{3})\) (\d{3})-(\d{4})/;
matches = phone.match(regex);

if (matches) {
  const areaCode = matches[1];
  const centralOfficeCode = matches[2];
  const lineNumber = matches[3];

  console.log("Area Code:", areaCode);
  console.log("Central Office Code:", centralOfficeCode);
  console.log("Line Number:", lineNumber);
} else {
  console.log("No matches found.");
}
console.log();


// task-6
const email = "username@example.com";
regex = /([^@]+)@([^@]+)/;
matches = email.match(regex);

if (matches) {
  const username = matches[1];
  const domain = matches[2];

  console.log("Username:", username);
  console.log("Domain:", domain);
} else {
  console.log("No matches found.");
}



// Activity 4 : Assertions and Boundaries
console.log("\n Activity 4");
// task-7
const matchWordAtStart = (text, word) => {
    regex = new RegExp(`^${word}\\b`);
    return (text.match(regex))? true : false;
}
console.log(matchWordAtStart(text, "World"));

// task-8
const matchWordAtEnd = (text, word) => {
    regex = new RegExp(`\\b${word}$`);
    return (text.match(regex))? true : false;
}
console.log(matchWordAtStart(text, "End"));



// Activity 5 : Practical Applications
console.log("\n Activity 5");
// task-9
const password = "Password@123";
const validPassword = (password) => {
    regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return (regex.test(password)?true:false);
}
console.log(validPassword(password));

// task-10
const url = "https://www.example.com/path?query=123#fragment";
const validURL = (url) => {
    regex =/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9-_.~]*)*(\?[a-zA-Z0-9-_.~=&]*)?(#[a-zA-Z0-9-_.~]*)?$/;
    return (regex.test(url)?true:false);
}
console.log(validURL(url));


// Feature Request
// ref to the above tasks.


