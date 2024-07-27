export const books = [
  {
    title: "Harry Porter and the Philosopher's Stone",
    author: "JK Rowling",
    year: 1909,
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    year: 1937,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
];

export const showBooks = ()=>{
    books.map((book)=>{
        console.log();
        console.log(`Title : ${book.title}`);
        console.log(`Author : ${book.author}`);
        console.log(`Year : ${book.year}`);        
    })  
} 
export default showBooks;









