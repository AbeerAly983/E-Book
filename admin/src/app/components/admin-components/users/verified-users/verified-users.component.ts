import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Num_Of_Verify_Users,
  Verify_Or_NotVerify_User,
} from 'src/app/interfaces/User';
import { VerifiedUsersService } from 'src/app/services/users/verified-users.service';

@Component({
  selector: 'app-verified-users',
  templateUrl: './verified-users.component.html',
  styleUrls: [
    './verified-users.component.css',
    '../../books/all-books/all-books.component.css',
  ],
})
export class VerifiedUsersComponent {
  activeDiv: string = 'show_All_Verify_Users'; // Variable used to active div
  show_All_Verify_Users: boolean = true;
  show_All_Verify_Users_This_Day: boolean = false;
  show_All_Verify_Users_This_Month: boolean = false;
  show_All_Verify_Users_This_Year: boolean = false;
  showBack: boolean = false; // show table of role
  allVerifyUsers: Verify_Or_NotVerify_User[] = [];
  allVerifyUsersToday: Verify_Or_NotVerify_User[] = [];
  allVerifyUsersThisMonth: Verify_Or_NotVerify_User[] = [];
  allVerifyUsersThisYear: Verify_Or_NotVerify_User[] = [];
  numOfAllVerifyUsers!: Num_Of_Verify_Users;
  constructor(private service: VerifiedUsersService, private router: Router) {}

  ngOnInit() {
    this.getNumOfAllVerifyUsers();
    this.getAllVerifyUsers();
    this.getAllVerifyUsersToday();
    this.getAllVerifyUsersThisMonth();
    this.getAllVerifyUsersThisYear();
  }
  getNumOfAllVerifyUsers() {
    const token = localStorage.getItem('access_token');
    this.service.get_num_of_verified_users(token).subscribe(
      (response: any) => {
        this.numOfAllVerifyUsers = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllVerifyUsers() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_verified_users(token).subscribe(
      (response: any) => {
        this.allVerifyUsers = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllVerifyUsersToday() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_verified_users_today(token).subscribe(
      (response: any) => {
        this.allVerifyUsersToday = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllVerifyUsersThisMonth() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_verified_users_this_monthy(token).subscribe(
      (response: any) => {
        this.allVerifyUsersThisMonth = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllVerifyUsersThisYear() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_verified_users_this_year(token).subscribe(
      (response: any) => {
        this.allVerifyUsersThisYear = response;
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
    this.show_All_Verify_Users = true;
    this.show_All_Verify_Users_This_Day = false;
    this.show_All_Verify_Users_This_Month = false;
    this.show_All_Verify_Users_This_Year = false;
    this.showBack = true;
  }
  // show table of all users
  showVerifyThisDay() {
    this.show_All_Verify_Users = false;
    this.show_All_Verify_Users_This_Day = true;
    this.show_All_Verify_Users_This_Month = false;
    this.show_All_Verify_Users_This_Year = false;
    this.showBack = true;
  }
  // show table of company
  showVerifyThisMonth() {
    this.show_All_Verify_Users = false;
    this.show_All_Verify_Users_This_Day = false;
    this.show_All_Verify_Users_This_Month = true;
    this.show_All_Verify_Users_This_Year = false;
    this.showBack = true;
  }
  showVerifyThisYear() {
    this.show_All_Verify_Users = false;
    this.show_All_Verify_Users_This_Day = false;
    this.show_All_Verify_Users_This_Month = false;
    this.show_All_Verify_Users_This_Year = true;
    this.showBack = true;
  }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
}
