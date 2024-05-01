import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/user/books.service';

@Component( {
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
} )
export class ProfileComponent {
  books: Book[] = [];
  src: string;
  allBook: Book[];

  constructor( private bookService: BooksService , private router: Router) {
  }

  getUserBooks() {
    this.bookService.getUserPaidBooks().subscribe( {
      next: res => {
        this.books = res as Book[];
        console.log( this.books );
      }
      , error: ( error: any ) => {
        if ( error.status === 401 ) {
          localStorage.removeItem( 'access_token' );
          this.router.navigate( ["/login"] );
        }
      }
    }
    );
  
  }

  getSrcPaidBook(id:number) {
    this.bookService.getSrcPaidBook( id ).subscribe( ( res: any ) => {
      this.src = res;
      this.readPdf();
    } );
  }

  getSrcPaidBookDownload(id:number) {
    this.bookService.getSrcPaidBookDownload( id ).subscribe( ( res: any ) => {
      this.src = res;
      this.downloadPdf();
    } );
  }

  readPdf() {
    const link = document.createElement( 'a' );
    link.href = `assets/${this.src}`;
    if (this.src) {
      link.target = '_blank';
      link.click();
    } else {
      console.error('Error: File source is undefined.');
    }
  }

  downloadPdf() {
    const link = document.createElement( 'a' );
    link.href = `assets/${this.src}`;
    if (this.src) {
      link.download = this.src.split('/')[1];
      link.click();
    } else {
      console.error('Error: File source is undefined.');
    }
  }

  ngOnInit(): void {
    this.getUserBooks();
    this.allBooks();
  }

  allBooks() {
    this.bookService.getAllBooks().subscribe( ( res ) => {
      this.allBook = res as Book[];
    } );
  }

}
