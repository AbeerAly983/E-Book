import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/user/books.service';


@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../user-components/show-books/show-books.component.css'],
} )

export class HomeComponent {

  openRead = false;
  searchTerm = '';
  allBook: Book[];
  freeBook: Book[];
  paidBook: Book[];
  filteredBooks: Book[];
  showSearch: boolean;

  constructor( private bookService: BooksService ) { }

  downloadPdf() {
    const link = document.createElement( 'a' );
    link.href = '../../../assets/ICM.pdf';
    link.download = 'ICM.pdf';
    link.click();
  }

  animationScroll() {
    const boxes = document.querySelectorAll( '.box' );
    window.addEventListener( 'scroll', function () {
      const trigger = window.innerHeight / 5 * 4;
      boxes.forEach( ( box ) => {
        const boxTop = box.getBoundingClientRect().top;
        if ( boxTop < trigger ) {
          box.classList.add( 'show' );
        } else {
          box.classList.remove( 'show' );
        }
      } );
    } );
  }

  allBooks() {
    this.bookService.getAllBooks().subscribe( ( res ) => {
      this.allBook = res as Book[];

    } );
  }

  paidBooks() {
    this.bookService.getPaidBooks().subscribe( ( res ) => {
      this.paidBook = res as Book[];
    } );
  }

  freeBooks() {
    this.bookService.getFreeBooks().subscribe( ( res ) => {
      this.freeBook = res as Book[];
    } );
  }

  searchBook(): void {
    if ( this.searchTerm.trim() !== '' ) {
      this.filteredBooks = this.allBook.filter( ( ele ) =>
        ele.Name.toLowerCase().includes( this.searchTerm.toLowerCase() )
      );
      this.showSearch = true;
    } else {
      this.showSearch = false;
      this.filteredBooks = [];
    }
  }


  ngOnInit(): void {
    this.animationScroll();
    this.allBooks();
    this.paidBooks();
    this.freeBooks();
  }

}