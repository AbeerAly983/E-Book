import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Num_Of_Not_Verify_Users,
  Verify_Or_NotVerify_User,
} from 'src/app/interfaces/User';
import { NotVerifiedUsersService } from 'src/app/services/users/not-verified-users.service';

@Component({
  selector: 'app-not-verified-users',
  templateUrl: './not-verified-users.component.html',
  styleUrls: [
    './not-verified-users.component.css',
    '../../books/all-books/all-books.component.css',
    '../../books/free-books/free-books.component.css',
  ],
})
export class NotVerifiedUsersComponent {
  activeDiv: string = 'show_All_Not_Verify_Users'; // Variable used to active div
  show_All_Not_Verify_Users: boolean = true;
  show_All_Not_Verify_Users_This_Day: boolean = false;
  show_All_Not_Verify_Users_This_Month: boolean = false;
  show_All_Not_Verify_Users_This_Year: boolean = false;
  showBack: boolean = false; // show table of role
  allNotVerifyUsers: Verify_Or_NotVerify_User[] = [];
  allNotVerifyUsersToday: Verify_Or_NotVerify_User[] = [];
  allNotVerifyUsersThisMonth: Verify_Or_NotVerify_User[] = [];
  allNotVerifyUsersThisYear: Verify_Or_NotVerify_User[] = [];
  numOfAllNotVerifyUsers!: Num_Of_Not_Verify_Users;
  responseMsg: any;
  valid: boolean = false;
  idCheckAlert: number | undefined;

  constructor(
    private service: NotVerifiedUsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getNumOfAllNotVerifyUsers();
    this.getAllNotVerifyUsers();
    this.getAllNotVerifyUsersToday();
    this.getAllNotVerifyUsersThisMonth();
    this.getAllNotVerifyUsersThisYear();
  }
  getNumOfAllNotVerifyUsers() {
    const token = localStorage.getItem('access_token');
    this.service.get_num_of_not_verified_users(token).subscribe(
      (response: any) => {
        this.numOfAllNotVerifyUsers = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllNotVerifyUsers() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_not_verified_users(token).subscribe(
      (response: any) => {
        this.allNotVerifyUsers = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllNotVerifyUsersToday() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_not_verified_users_today(token).subscribe(
      (response: any) => {
        this.allNotVerifyUsersToday = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllNotVerifyUsersThisMonth() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_not_verified_users_this_monthy(token).subscribe(
      (response: any) => {
        this.allNotVerifyUsersThisMonth = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllNotVerifyUsersThisYear() {
    const token = localStorage.getItem('access_token');
    this.service.get_all_not_verified_users_this_year(token).subscribe(
      (response: any) => {
        this.allNotVerifyUsersThisYear = response;
      },
      (error) => {
        if (error.status == 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );
  }

  deleteUser(id: number) {
    this.service.delete_not_verified_users(id).subscribe(
      (resposnse) => {
        this.responseMsg = resposnse;
        if (this.responseMsg.message == 'Deleted Successfully') {
          this.valid = false;
          this.getAllNotVerifyUsers();
        }
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  showAll() {
    this.show_All_Not_Verify_Users = true;
    this.show_All_Not_Verify_Users_This_Day = false;
    this.show_All_Not_Verify_Users_This_Month = false;
    this.show_All_Not_Verify_Users_This_Year = false;
    this.showBack = true;
  }
  // show table of all users
  showNotVerifyThisDay() {
    this.show_All_Not_Verify_Users = false;
    this.show_All_Not_Verify_Users_This_Day = true;
    this.show_All_Not_Verify_Users_This_Month = false;
    this.show_All_Not_Verify_Users_This_Year = false;
    this.showBack = true;
  }
  // show table of company
  showNotVerifyThisMonth() {
    this.show_All_Not_Verify_Users = false;
    this.show_All_Not_Verify_Users_This_Day = false;
    this.show_All_Not_Verify_Users_This_Month = true;
    this.show_All_Not_Verify_Users_This_Year = false;
    this.showBack = true;
  }
  showNotVerifyThisYear() {
    this.show_All_Not_Verify_Users = false;
    this.show_All_Not_Verify_Users_This_Day = false;
    this.show_All_Not_Verify_Users_This_Month = false;
    this.show_All_Not_Verify_Users_This_Year = true;
    this.showBack = true;
  }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
}
