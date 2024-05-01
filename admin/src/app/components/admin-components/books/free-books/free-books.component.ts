import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllBooks } from 'src/app/interfaces/book';
import { FreeBook } from 'src/app/interfaces/free-book';
import { FreeBookService } from 'src/app/services/books/free-book.service';

@Component({
  selector: 'app-free-books',
  templateUrl: './free-books.component.html',
  styleUrls: [
    './free-books.component.css',
    '../all-books/all-books.component.css',
  ],
})
export class FreeBooksComponent {
  activeDiv: string = 'show_All_Free_Books'; // Variable used to active div
  show_All_Free_Books: boolean = true;
  show_All_Free_Books_This_Day: boolean = false;
  show_All_Free_Books_This_Month: boolean = false;
  show_All_Free_Books_This_Year: boolean = false;
  showBack: boolean = false; // show table of role
  allFreeBook: AllBooks[] = [];
  allFreeBookAddedToday: AllBooks[] = [];
  allFreeBookAddedThisMonth: AllBooks[] = [];
  allFreeBookAddedThisYear: AllBooks[] = [];
  numOfAllFreeBooks!: FreeBook;
  constructor(private service: FreeBookService, private router: Router) {}

  ngOnInit() {
    this.getNumOfAllFreeBooks();
    this.getAllFreeBooks();
    this.getAllFreeBooksAddedToday();
    this.getAllFreeBooksAddedThisMonth();
    this.getAllFreeBooksAddedThisYear();
  }
  getNumOfAllFreeBooks() {
    const token = localStorage.getItem('access_token');
    this.service.get_num_of_freeBooks(token).subscribe(
      (response: any) => {
        this.numOfAllFreeBooks = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllFreeBooks() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_freeBooks(token).subscribe(
      (response: any) => {
        this.allFreeBook = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllFreeBooksAddedToday() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_free_books_added_today(token).subscribe(
      (response: any) => {
        this.allFreeBookAddedToday = response;
        console.log(this.allFreeBookAddedToday);
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllFreeBooksAddedThisMonth() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_free_books_added_this_monthy(token).subscribe(
      (response: any) => {
        this.allFreeBookAddedThisMonth = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllFreeBooksAddedThisYear() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_free_books_added_this_year(token).subscribe(
      (response: any) => {
        this.allFreeBookAddedThisYear = response;
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
    this.show_All_Free_Books = true;
    this.show_All_Free_Books_This_Day = false;
    this.show_All_Free_Books_This_Month = false;
    this.show_All_Free_Books_This_Year = false;
    this.showBack = true;
  }
  // show table of all users
  showFreeThisDay() {
    this.show_All_Free_Books = false;
    this.show_All_Free_Books_This_Day = true;
    this.show_All_Free_Books_This_Month = false;
    this.show_All_Free_Books_This_Year = false;
    this.showBack = true;
  }
  // show table of company
  showFreeThisMonth() {
    this.show_All_Free_Books = false;
    this.show_All_Free_Books_This_Day = false;
    this.show_All_Free_Books_This_Month = true;
    this.show_All_Free_Books_This_Year = false;
    this.showBack = true;
  }
  showFreeThisYear() {
    this.show_All_Free_Books = false;
    this.show_All_Free_Books_This_Day = false;
    this.show_All_Free_Books_This_Month = false;
    this.show_All_Free_Books_This_Year = true;
    this.showBack = true;
  }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
}
