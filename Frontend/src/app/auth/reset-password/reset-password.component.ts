import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authorization/auth.service';
import { ResetPassword } from 'src/app/interfaces/auth';


@Component( {
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css', "../login/login.component.css"]
} )
export class ResetPasswordComponent {

  constructor( private auth: AuthService, private router: Router ) { }
  email: string;
  isAlert: boolean = false;
  msgAlert: string;
  resetResult: any;
  loading: boolean = false; // add loading variable
  isLoading: boolean = false; // for resend btn


  onReset( data: ResetPassword ) {
    this.loading = true; // set loading variable to true
    let otpInputs = document.querySelectorAll<HTMLInputElement>( ".vr-con input" );
    data.otp = ""
    data.email = this.email;
    for ( let index = 0; index < otpInputs.length; index++ ) {
      data.otp = data.otp + otpInputs[index].value;
    }
    this.auth.resetPassword( data ).subscribe( ( result ) => {
      this.resetResult = result;

      if ( this.resetResult.success == 'Password Reset Successfully' ) {
        sessionStorage.removeItem( "email" );
        this.router.navigate( ['/login'] );
      }
      else if ( this.resetResult.error == 'OTP Is Wrong' ) {
        this.isAlert = true; //alert
        this.msgAlert = 'Enter valid code!';
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
        for ( let index = 0; index < otpInputs.length; index++ ) {
          otpInputs[index].value = "";
        }
      }
      else if ( this.resetResult.error.trim() == 'OTP Is Expire' ) {
        this.isAlert = true; //alert
        this.msgAlert = 'Code is expired';
        this.ClearInputs();
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      else if ( this.resetResult.error.email[0] == 'The selected email is invalid.' ) {
        this.isAlert = true; //alert
        this.msgAlert = 'This email is not found! Try again.';
        this.ClearInputs();
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      this.loading = false; // set loading variable to true
    } );
  }

  focusInput() {
    let otpInputs = Array.from( document.querySelectorAll<HTMLInputElement>( ".vr-con input" ) );
    for ( let index = 0; index < otpInputs.length - 1; index++ ) {
      otpInputs[0].focus();
      otpInputs[index].addEventListener( "input", () => {
        if ( otpInputs[index].value.length == 1 ) {
          otpInputs[index + 1].focus();
        }
      } );
    }
  }

  ResendCode() {
    this.isLoading = true; // set loading variable to true
    this.ClearInputs();
    const email = { email: this.email };
    this.auth.resend( email ).subscribe( ( result ) => {
      this.resetResult = result;
      if ( this.resetResult.sucess == true ) {
        this.isAlert = true;
        this.msgAlert = 'Code sent successfully.'
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      else if ( this.resetResult.error.email[0] == 'The selected email is invalid.' ) {
        this.isAlert = true; //alert
        this.msgAlert = 'This email is not found! Try again.';
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      this.isLoading = false; // set loading variable to true
    } );
  }


  ClearInputs() {
    let otpInputs = Array.from( document.querySelectorAll<HTMLInputElement>( ".input input" ) );
    for ( let index = 0; index < otpInputs.length; index++ ) {
      otpInputs[index].value = "";
    }
  }

  backLogin() {
    this.router.navigate( ['/login'] );
    sessionStorage.removeItem( "email" );
  }

  // show & hide password
  showPassword = false;
  showRepeatPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  toggleShowRepeatPassword() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }

  ngOnInit(): void {
    this.email = localStorage.getItem( 'email' )!;
    this.focusInput();
    if ( !sessionStorage.getItem( 'email' ) ) {
      this.router.navigate( ['/login'] );
    }
  }
}
