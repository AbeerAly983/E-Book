import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { Router } from '@angular/router';
import { Register } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/authorization/auth.service';

@Component( {
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../login/login.component.css']
} )
export class SignupComponent {

  loading: boolean = false; // add loading variable
  userModel = new User( "", "", "", "", "" );
  inValid: boolean = false;
  ResponseMsg: any;

  constructor( private auth: AuthService, private router: Router ) {

  }


  onSubmit( data: Register ) {
    this.loading = true; // set loading variable to true
    this.auth.register( data ).subscribe( ( result ) => {
      this.ResponseMsg = result;
      if ( this.ResponseMsg.message == "Successfully Registeration" ) {
        sessionStorage.setItem( "emailVer", data.email );
        this.router.navigate( ['/verification'] );
      }
      else if ( this.ResponseMsg.error.email[0] == "The email has already been taken." ) {
        this.inValid = true;
        setTimeout( () => {
          this.inValid = false;
        }, 3000 );
      }
      this.loading = false; // set loading variable to false after the function is done
    }
    );
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
  }
}
