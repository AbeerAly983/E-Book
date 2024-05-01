import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgetPassword } from '../../interfaces/auth';
import { AuthService } from 'src/app/services/authorization/auth.service';

@Component( {
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css', '../login/login.component.css']
} )
export class ForgetPasswordComponent {
  loading: boolean; // add loading variable
  responseMsg: any;
  msgAlert: string;
  isAlert: boolean;
  email: string;

  constructor( private auth: AuthService, private router: Router ) {
  }


  onForget( data: ForgetPassword ) {
    this.loading = true; // set loading variable to true
    this.auth.forgetPassword( data ).subscribe( ( res ) => {
      this.responseMsg = res;
      if ( this.responseMsg.sucess == true ) {
        this.email = data.email;
        sessionStorage.setItem( "email", this.email );
        this.router.navigate( ['/resetPassword'] );
      }
      else if ( this.responseMsg.error.email[0] == 'The selected email is invalid.' ) {
        this.isAlert = true; //alert
        this.msgAlert = 'This email is not found! Try again.';
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      this.loading = false; // set loading variable to true
    } );
  }

  backLogin() {
    this.router.navigate( ['/login'] );
  }

}
