// Activity 1 : Object Creation and Access
console.log("\n Activity 1");
const createBook = (title, author, year)=>{
    return  {
        title,
        author,
        year 
    }
}

let book = createBook("Harry Porter and the Philosopher's Stone", "JK Rowling", 1997);
console.log(book);

console.log(`TITLE : ${book.author} \nAUTHOR : ${book.title}`);



// Activity 2 : Object Methods
console.log("\n Activity 2");
book = {
    ...book,
    printDetails:function() {
        console.log(`TITLE : ${book.author} \nAUTHOR : ${book.title}`);
    }
}

book.printDetails();

book = {
    ...book,
    updateYear:function(newYear) {
        this.year = newYear;
    }
}
book.updateYear(1909);
console.log(book);



// Activity 3 : Nested Objects
console.log("\n Activity 3");
let library = {
    name:"NewTown Library",
    books:[book]
}
library.books.push(createBook("The Lord of the Rings", "J. R. R. Tolkien", 1937));
library.books.push(createBook("Pride and Prejudice", "Jane Austen", 1813));
console.log(library);

console.log(library.name);
console.log(library.books.map((book)=>{
    if(book){
        console.log(book.title);
    }
}));



// Activity 4 : The this Keyword
console.log("\n Activity 4");
book = {
    ...book,
    stringReturn : function(){
        return this.author+String(this.year);
    }
}
console.log(book.stringReturn());



// Activity 5 : Object Iteration
console.log("\n Activity 5");
for (const key in book) {
    console.log(key);
}

console.log(Object.keys(book));
console.log(Object.values(book));



// Feature Request
// feature f1
let book2 = createBook("Harry Porter and the Chamber of Secrets", "JK Rowling", 2000);
console.log(book2);
book2 = {
    ...book2,
    printDetails:function() {
        console.log(`TITLE : ${book2.author} \nAUTHOR : ${book2.title}`);
    }
}

book2.printDetails();


// feature f2
console.log(library);

//feature f3
for (const key in book2) {
    console.log(key);
}
console.log(Object.keys(book2));
console.log(Object.values(book2));

