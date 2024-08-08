import { DataSource } from "./datasource.model";
import { Book } from "./book.model";

export class Bookreponsitority{
    private dataSource:DataSource;
    private books:Book[];
    constructor(){
        this.dataSource = new DataSource();
        this.books = new Array<Book>();
        this.dataSource.getBooks().forEach(element => {
            this.books.push(element);
        });
    }
    getBooks():Book[]{
        return this.books;
    }

    getBookId(id:number):any{
        return this.books.find(element => element.id == id);
    }


}