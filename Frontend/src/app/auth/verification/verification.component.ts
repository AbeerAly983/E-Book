import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authorization/auth.service';
import { Verification } from 'src/app/interfaces/auth';



@Component( {
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css', '../login/login.component.css']
} )
export class VerificationComponent {

  verificationData: Verification = { otp: "", email: "" };
  email: string;
  msgAlert: string;
  result: any;
  isAlert: boolean = false;
  loading: boolean = false; // add loading variable
  isLoading: boolean = false; // for resend btn

  constructor( private auth: AuthService, private router: Router ) {
  }

  onVerify() {
    this.loading = true; // set loading variable to true
    let otpInputs = document.querySelectorAll<HTMLInputElement>( ".vr-con input" );
    this.verificationData.otp = "";
    for ( let index = 0; index < otpInputs.length; index++ ) {
      this.verificationData.otp = this.verificationData.otp + otpInputs[index].value;
    }
    this.verificationData.email = this.email;
    this.auth.verifyEmail( this.verificationData ).subscribe( ( result ) => {
      this.result = result;

      if ( this.result.success == 'Email Verified Successfully' ) {
        sessionStorage.removeItem( "emailVer" );
        this.router.navigate( ['/login'] );
      }
      else if ( this.result.error == 'OTP Is Wrong' ) {
        this.isAlert = true;
        this.msgAlert = 'Enter valid code!';
        this.ClearInputs();
        setTimeout( () => { this.isAlert = false }, 3000 );
      }
      else if ( this.result.error == 'OTP Is Expire' ) {
        this.isAlert = true; //alert
        this.msgAlert = 'Code is expired';
        this.ClearInputs();
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      else if ( this.result.error.email[0] == 'The selected email is invalid.' ) {
        this.isAlert = true; //alert
        this.msgAlert = 'This email is not found! Try again.';
        this.ClearInputs();
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      this.loading = false; // set loading variable to false after the function is done
    } );
  }

  ResendCode() {
    this.isLoading = true; // set loading variable to true
    this.ClearInputs();
    const email = { email: this.email };
    this.auth.resend( email ).subscribe( ( result ) => {
      this.result = result;

      if ( this.result.sucess == true ) {
        this.isAlert = true;
        this.msgAlert = 'Code sent successfully.'
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      else if ( this.result.error.email[0] == 'The selected email is invalid.' ) {
        this.isAlert = true; //alert
        this.msgAlert = 'This email is not found! Try again.';
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      this.isLoading = false; // set loading variable to true
    } );
  }

  focusInput() {
    let vrInputs = Array.from( document.querySelectorAll<HTMLInputElement>( ".vr-con input" ) );
    vrInputs[0].focus();
    for ( let index = 0; index < vrInputs.length - 1; index++ ) {
      vrInputs[index].addEventListener( "input", () => {
        if ( vrInputs[index].value.length == 1 ) {
          vrInputs[index + 1].focus();
        }
      } );
    }
  }

  ClearInputs() {
    let otpInputs = Array.from( document.querySelectorAll<HTMLInputElement>( ".vr-con input" ) );
    for ( let index = 0; index < otpInputs.length; index++ ) {
      otpInputs[index].value = "";
    }
  }

  backSignup() {
    this.router.navigate( ['/signup'] );
    sessionStorage.removeItem( "emailVer" );
  }

  ngOnInit(): void {
    this.email = sessionStorage.getItem( "emailVer" )!;
    this.focusInput();
    if ( !sessionStorage.getItem( 'emailVer' ) ) {
      this.router.navigate( ['/login'] );
    }
  }

}
