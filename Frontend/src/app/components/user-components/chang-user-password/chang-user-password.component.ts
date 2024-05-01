import { Component } from '@angular/core';
import { ChangePassword } from 'src/app/interfaces/User';
import { BooksService } from 'src/app/services/user/books.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-chang-user-password',
  templateUrl: './chang-user-password.component.html',
  styleUrls: ['./chang-user-password.component.css', '../../../auth/login/login.component.css']
} )
export class ChangUserPasswordComponent {
  isAlert: boolean = false;
  msgAlert: string;

  constructor( private service: BooksService, private router: Router ) {
  }

  // show & hide password when change password
  showPassword = false;
  showOldPassword = false;
  showRepeatPassword = false;
  toggleShowOldPassword() {
    this.showOldPassword = !this.showOldPassword;
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  toggleShowRepeatPassword() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }

  onChangePass( data: ChangePassword ) {
    this.service.changePassword( data ).subscribe( {
      next: ( res: any ) => {
        this.isAlert = true;
        this.msgAlert = res.message;
        setTimeout( () => { this.isAlert = false }, 3000 )
      },
      error: (error) => {
        if ( error.status === 401 ) {
          localStorage.removeItem( 'access_token' );
          this.router.navigate( ["/login"] );
        }
      }
    } )
  }
}
