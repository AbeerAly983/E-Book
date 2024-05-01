import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartsService } from 'src/app/services/admin/charts.service';
import { VerifiedUsersService } from 'src/app/services/users/verified-users.service';

@Component({
  selector: 'app-main-charts',
  templateUrl: './main-charts.component.html',
  styleUrls: [
    './main-charts.component.css',
    '../../books/all-books/all-books.component.css',
  ],
})
export class MainChartsComponent {
  activeDiv: string = 'Users'; // Variable used to active div
  Users: boolean = true;
  Profit: boolean = false;
  Book: boolean = false;
  showBack: boolean = false;
  profitResponse: any;
  userResponse: any;
  bookResponse: any;
  constructor(
    private profit_service: ChartsService,
    private user_service: VerifiedUsersService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.allProfits();
    this.getNumOfAllVerifyUsers();
    this.allSales();
  }
  allProfits() {
    const token = localStorage.getItem('access_token');
    this.profit_service.all_profits(token).subscribe(
      (response: any) => {
        this.profitResponse = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getNumOfAllVerifyUsers() {
    const token = localStorage.getItem('access_token');
    this.user_service.get_num_of_verified_users(token).subscribe(
      (response: any) => {
        this.userResponse = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  allSales() {
    const token = localStorage.getItem('access_token');
    this.profit_service.sales(token).subscribe(
      (response: any) => {
        this.bookResponse = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  show_users() {
    this.Users = true;
    this.Profit = false;
    this.Book = false;
    this.showBack = true;
  }

  show_profit() {
    this.Users = false;
    this.Profit = true;
    this.Book = false;
    this.showBack = true;
  }

  show_book() {
    this.Users = false;
    this.Profit = false;
    this.Book = true;
    this.showBack = true;
  }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
}
