import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from './../../../services/user/books.service';

@Component( {
  selector: 'app-books-dep',
  templateUrl: './books-dep.component.html',
  styleUrls: ['./books-dep.component.css', '../show-books/show-books.component.css']
} )
export class BooksDepComponent {
  searchTerm: string;
  bookType: string;
  books: Book[];
  filterBooks: Book[];
  categories = ['fantasy', 'adventure', 'historical', 'science', 'classic Literature']
  constructor( private route: ActivatedRoute, private router: Router, private bookService: BooksService ) {

  }

  ngOnInit() {
    this.route.params.subscribe( ( params ) => {
      this.bookType = params['type'];
      this.getBooks();
    } );
  }

  getBooks() {
    if ( this.categories.includes( this.bookType ) ) {
      this.bookService.getBooksDep( this.bookType ).subscribe( ( res ) => {
        this.books = res as Book[];
        this.filterBooks = this.books; // Set filterBooks initially
        this.searchBook(); // to apply search if change category and searchTerm is exist
      } );
    }
    else {
      this.router.navigate( ['/not-found'] );
    }
  }

  searchBook() {
    if (this.searchTerm && this.searchTerm.trim() !== '' ) {
      this.books = this.filterBooks.filter( ele => {
        return ele.Name.toLowerCase().includes( this.searchTerm.toLowerCase() );
      } );
    }
    else {
      this.books = this.filterBooks;
    }
  }

}
