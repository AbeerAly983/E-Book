import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Num_Of_Not_Verify_Users,
  Num_Of_Verify_Users,
  Verify_Or_NotVerify_User,
} from 'src/app/interfaces/User';
import { NotVerifiedUsersService } from 'src/app/services/users/not-verified-users.service';
import { VerifiedUsersService } from 'src/app/services/users/verified-users.service';

@Component({
  selector: 'app-main-users',
  templateUrl: './main-users.component.html',
  styleUrls: [
    './main-users.component.css',
    '../../edit-profile/edit-profile.component.css',
    '../../books/all-books/all-books.component.css',
  ],
})
export class MainUsersComponent {
  activeDiv: string = 'Verify'; // Variable used to active div
  Verify: boolean = true;
  NotVerify: boolean = false;
  showBack: boolean = false;
  allVerifyUsers: Verify_Or_NotVerify_User[] = [];
  allNotVerifyUsers: Verify_Or_NotVerify_User[] = [];
  numOfAllVerifyUsers!: Num_Of_Verify_Users;
  numOfAllNotVerifyUsers!: Num_Of_Not_Verify_Users;
  responseMsg: any;
  valid: boolean = false;
  idCheckAlert: number | undefined;

  constructor(
    private verify_service: VerifiedUsersService,
    private notVerify_service: NotVerifiedUsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getNumOfAllVerifyUsers();
    this.getAllVerifyUsers();
    this.getNumOfAllNotVerifyUsers();
    this.getAllNotVerifyUsers();
  }

  getNumOfAllVerifyUsers() {
    const token = localStorage.getItem('access_token');
    this.verify_service.get_num_of_verified_users(token).subscribe(
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
    this.verify_service.get_all_verified_users(token).subscribe(
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
  getNumOfAllNotVerifyUsers() {
    const token = localStorage.getItem('access_token');
    this.notVerify_service.get_num_of_not_verified_users(token).subscribe(
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
    this.notVerify_service.get_all_not_verified_users(token).subscribe(
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
  deleteUser(id: number) {
    this.notVerify_service.delete_not_verified_users(id).subscribe(
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

  //activeDiv
  verifiedusers() {
    this.Verify = true;
    this.NotVerify = false;
    this.showBack = true;
  }
  notVerifiedusers() {
    this.Verify = false;
    this.NotVerify = true;
    this.showBack = true;
  }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
}
