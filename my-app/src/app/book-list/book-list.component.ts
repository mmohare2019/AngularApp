import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../types/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.less'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookSvc: BookService) {}

  ngOnInit(): void {
    this.books = this.bookSvc.getBooks(); 
  }
}
