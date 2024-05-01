import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile, User } from 'src/app/interfaces/User';
import { ProfileService } from 'src/app/services/admin/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  activeDiv: string = 'Email'; // Variable used to active div
  userModel = new User('', '', '', '', '');
  passYes: boolean = false;
  passNo: boolean = false;
  passOld: boolean = false;
  user?: Profile;
  userData?: Profile;
  responseMsg: any;
  Email: boolean = true;
  Password: boolean = false;
  showBack: boolean = false;
  ngOnInit(): void {
    this.getUserProfile();
    this.getUserEmail();
  }
  constructor(private service: ProfileService, private router: Router) {
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }
  }
  getUserProfile() {
    const token = localStorage.getItem('access_token');
    this.service.userProfile(token).subscribe(
      (data: any) => {
        this.userData = data;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getUserEmail() {
    const token = localStorage.getItem('access_token');
    this.service.userEmail(token).subscribe(
      (data: any) => {
        this.user = data;
        console.log(data);
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  onUpdateEmailName(data: any) {
    this.service.changeEmail(data).subscribe((response) => {
      this.passYes = true;
      setTimeout(() => {
        this.passYes = false;
      }, 3000);
    });
  }

  onSubmit(data: any) {
    this.service.changePassword(data).subscribe((response) => {
      this.responseMsg = response;
      console.log(this.responseMsg);
      if (this.responseMsg.message == 'Password Updated') {
        this.passYes = true;
        setTimeout(() => {
          this.passYes = false;
        }, 3000);
        this.clearData();
      } else if (this.responseMsg.message == 'Password not correct') {
        this.passNo = true;
        setTimeout(() => {
          this.passNo = false;
        }, 3000);
      } else if (this.responseMsg.message == "There isn't password change") {
        this.passOld = true;
        setTimeout(() => {
          this.passOld = false;
        }, 3000);
      }
    });
  }
  // show & hide password
  showPassword = false;
  showNewPassword = false;
  showRepeatPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  toggleShowNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }
  toggleShowRepeatPassword() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }
  //activeDiv
  EditPassword() {
    this.Email = false;
    this.Password = true;
    this.showBack = true;
  }

  EditEmail() {
    this.Email = true;
    this.Password = false;
    this.showBack = true;
  }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }

  clearData() {
    let Inputs = document.querySelectorAll<HTMLInputElement>('.form-control');
    for (let index = 0; index < Inputs.length; index++) {
      Inputs[0].focus();
      Inputs[index].value = '';
    }
  }
}
