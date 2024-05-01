import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/user/books.service';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent {
  bookType: string;
  searchTerm: string;
  books: Book[];
  filterBooks: Book[];
  activeAllBooks: boolean;
  activeFreeBooks: boolean;
  activePaidBooks: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BooksService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookType = params['type'];
      this.getBooks();
      this.updateActiveNav();
    });
  }

  updateActiveNav() {
    this.activeAllBooks = this.bookType === 'allBooks' || this.bookType === 'popularBooks';
    this.activeFreeBooks = this.bookType === 'freeBooks';
    this.activePaidBooks = this.bookType === 'paidBooks' || this.bookType === 'bestSellers';
  }

  getBooks() {
    if (this.bookType == 'popularBooks' || this.bookType == 'allBooks') {
      this.bookService.getAllBooks().subscribe((res) => {
        this.books = res as Book[];
        this.filterBooks = this.books; // Set filterBooks initially
        this.searchBooks(); // to apply search if change books status and searchTerm is exist
      });
    } else if (this.bookType == 'bestSellers' || this.bookType == 'paidBooks') {
      this.bookService.getPaidBooks().subscribe((res) => {
        this.books = res as Book[];
        this.filterBooks = this.books;
        this.searchBooks();
      });
    } else if (this.bookType == 'freeBooks') {
      this.bookService.getFreeBooks().subscribe((res) => {
        this.books = res as Book[];
        this.filterBooks = this.books;
        this.searchBooks();
      });
    } else {
      // not-found-page
      this.router.navigate(['/not-found']);
    }
  }

  searchBooks() {
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      this.books = this.filterBooks.filter((ele) => {
        return ele.Name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    } else {
      // If no search term, show regular books
      this.books = this.filterBooks;
    }
  }
}
