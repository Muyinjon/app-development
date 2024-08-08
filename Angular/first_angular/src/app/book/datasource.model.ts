import { Book } from "./book.model";

export class DataSource {
 //create an array to store data
 private books:Book[]


 constructor(){
   this.books = new Array<Book>(
      new Book(1,"Angular","Muyin",2000),
      new Book(2,"React","John",202),
      new Book(3,"Java","Ronny",199),
      new Book(4,"Python","Money",532),
      new Book(5,"JavaScript","Coney",69),
      new Book(6,"C++","Bunny",420)
    )
 } 

 //method to that return the array of the books
 getBooks():Book[]{
   return this.books;
 }


}

