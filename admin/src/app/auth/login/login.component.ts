import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/authorization/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  ResponseMsg: any;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  loading: boolean = false; // add loading variable

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(data: Login) {
    this.loading = true; // set loading variable to true

    this.auth.login(data).subscribe((result: any) => {
      this.ResponseMsg = result;
      console.log(result);
      if (this.ResponseMsg.token) {
        localStorage.setItem('access_token', this.ResponseMsg.token);
        this.router.navigate(['/admin/profile']);
      } else if (this.ResponseMsg.error === 'email was wrong') {
        this.emailInvalid = true; //alert
        setTimeout(() => {
          this.emailInvalid = false;
        }, 3000);
      } else if (this.ResponseMsg.error === 'password was wrong') {
        this.passwordInvalid = true; //alert
        setTimeout(() => {
          this.passwordInvalid = false;
        }, 3000);
      }

      this.loading = false; // set loading variable to false after the function is done
    });
  }

  // show & hide password
  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {}
}
