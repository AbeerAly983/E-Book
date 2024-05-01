import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllBooks } from 'src/app/interfaces/book';
import { PaidBook } from 'src/app/interfaces/paid-book';
import { PaidBookService } from 'src/app/services/books/paid-book.service';

@Component({
  selector: 'app-paid-books',
  templateUrl: './paid-books.component.html',
  styleUrls: [
    './paid-books.component.css',
    '../all-books/all-books.component.css',
  ],
})
export class PaidBooksComponent {
  activeDiv: string = 'show_All_Paid_Books'; // Variable used to active div
  show_All_Paid_Books: boolean = true;
  show_All_Paid_Books_This_Day: boolean = false;
  show_All_Paid_Books_This_Month: boolean = false;
  show_All_Paid_Books_This_Year: boolean = false;
  showBack: boolean = false; // show table of role
  allPaidBook: AllBooks[] = [];
  allPaidBookAddedToday: AllBooks[] = [];
  allPaidBookAddedThisMonth: AllBooks[] = [];
  allPaidBookAddedThisYear: AllBooks[] = [];
  numOfAllPaidBooks!: PaidBook;

  constructor(private service: PaidBookService, private router: Router) {}

  ngOnInit() {
    this.getNumOfAllPaidBooks();
    this.getAllPaidBooks();
    this.getAllPaidBooksAddedToday();
    this.getAllPaidBooksAddedThisMonth();
    this.getAllPaidBooksAddedThisYear();
  }
  getNumOfAllPaidBooks() {
    const token = localStorage.getItem('access_token');
    this.service.get_num_of_paidBooks(token).subscribe(
      (response: any) => {
        this.numOfAllPaidBooks = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllPaidBooks() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_paidBooks(token).subscribe(
      (response: any) => {
        this.allPaidBook = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllPaidBooksAddedToday() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_paid_books_added_today(token).subscribe(
      (response: any) => {
        this.allPaidBookAddedToday = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllPaidBooksAddedThisMonth() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_paid_books_added_this_monthy(token).subscribe(
      (response: any) => {
        this.allPaidBookAddedThisMonth = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllPaidBooksAddedThisYear() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_paid_books_added_this_year(token).subscribe(
      (response: any) => {
        this.allPaidBookAddedThisYear = response;
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
    this.show_All_Paid_Books = true;
    this.show_All_Paid_Books_This_Day = false;
    this.show_All_Paid_Books_This_Month = false;
    this.show_All_Paid_Books_This_Year = false;
    this.showBack = true;
  }
  // show table of all users
  showPaidThisDay() {
    this.show_All_Paid_Books = false;
    this.show_All_Paid_Books_This_Day = true;
    this.show_All_Paid_Books_This_Month = false;
    this.show_All_Paid_Books_This_Year = false;
    this.showBack = true;
  }
  // show table of company
  showPaidThisMonth() {
    this.show_All_Paid_Books = false;
    this.show_All_Paid_Books_This_Day = false;
    this.show_All_Paid_Books_This_Month = true;
    this.show_All_Paid_Books_This_Year = false;
    this.showBack = true;
  }
  showPaidThisYear() {
    this.show_All_Paid_Books = false;
    this.show_All_Paid_Books_This_Day = false;
    this.show_All_Paid_Books_This_Month = false;
    this.show_All_Paid_Books_This_Year = true;
    this.showBack = true;
  }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
}
