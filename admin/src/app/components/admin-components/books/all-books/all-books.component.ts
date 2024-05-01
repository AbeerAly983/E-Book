import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllBooks } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent {
  activeDiv: string = 'showAllBooks'; // Variable used to active div
  showAllBooks: boolean = true;
  showFreeBooks: boolean = false;
  showPaidBooks: boolean = false;
  showBack: boolean = false; // show table of role
  AllBook: AllBooks[] = [];
  AllFreeBook: AllBooks[] = [];
  AllPaidBook: AllBooks[] = [];
  constructor(private service: BookService, private router: Router) {}

  ngOnInit() {
    this.getAllBook();
  }
  getAllBook() {
    const token = localStorage.getItem('access_token');
    this.service.getAllBooks(token).subscribe(
      (response: any) => {
        console.log(response);
        this.AllBook = response;
        this.AllFreeBook = response.filter(
          (response: { Price: string }) => response.Price === '0'
        );
        this.AllPaidBook = response.filter(
          (response: { Price: string }) => response.Price !== '0'
        );
        console.log(this.AllPaidBook);
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }

  showAll() {
    this.showAllBooks = true;
    this.showFreeBooks = false;
    this.showPaidBooks = false;
    this.showBack = true;
  }
  // show table of all users
  showFree() {
    this.showFreeBooks = true;
    this.showAllBooks = false;
    this.showPaidBooks = false;
    this.showBack = true;
  }
  // show table of company
  showPaid() {
    this.showAllBooks = false;
    this.showFreeBooks = false;
    this.showPaidBooks = true;
    this.showBack = true;
  }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
  sortTableByReads() {
    this.AllBook.sort((a, b) => a.NumOfReads - b.NumOfReads);
  }
  sortTableByDownload() {
    this.AllBook.sort((a, b) => a.NumOfDownloads - b.NumOfDownloads);
  }
}
