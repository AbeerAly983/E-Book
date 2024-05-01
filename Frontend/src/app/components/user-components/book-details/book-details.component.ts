import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/user/books.service';

@Component( {
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
} )
export class BookDetailsComponent {
  id: number;
  book?: Book;
  showDesc: boolean = false;
  src: string;
  allBook: Book[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BooksService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( ( params ) => {
      this.id = +params['id'];
      this.getBookDetails();
    } );

    this.allBooks();
  }

  getBookDetails() {
    this.bookService.getBookDetails( this.id ).subscribe( ( res ) => {
      this.book = res as Book;
      if ( this.book == null ) {
        this.router.navigate( ['not-found'] );
      }
    } );
  }

  dropDesc() {
    this.showDesc = !this.showDesc;
  }

  getFreeBook(id:number) {
    this.bookService.getSrcFreeBook( id ).subscribe( ( res: any ) => {
      this.src = res.File;
      this.readPdf();
    } )
  }

  getFreeBookDownload(id:number) {
    this.bookService.getSrcFreeBookDownload( id ).subscribe( ( res: any ) => {
      this.src = res.File;
      this.downloadPdf();
    } )
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

  allBooks() {
    this.bookService.getAllBooks().subscribe( ( res ) => {
      this.allBook = res as Book[];
    } );
  }


}
