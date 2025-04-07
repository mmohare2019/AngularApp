import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [
    {isbn: 1, title: '1984', author: 'George Orwell'},
    {isbn: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee'},
    {isbn: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'}
  ]
  constructor() { }

  getBooks() {
    return this.books;
  }

  getBook(title: string) {
    return this.books.find(book => book.title === title);
  }

  addBook(book: Book) {
    const found = this.books.find(b => b === book); 
    if (!found) {
      this.books.push(book);
    }
  }

  removeBook(book: Book): Book[] {
    const index = this.books.findIndex(b => b === book);
    if (index) {
      this.books.splice(index, 1);
    }
    return this.books;
  }
}
