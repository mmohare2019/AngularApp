import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './services/book.service';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        BookService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }