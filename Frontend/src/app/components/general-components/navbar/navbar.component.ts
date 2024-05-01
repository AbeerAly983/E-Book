import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authorization/auth.service';

@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
} )
export class NavbarComponent implements OnInit {
  responseMsg: any;
  isDarkTheme = false;
  selected: boolean;

  constructor( private _service: AuthService, private router: Router ) { }

  logout() {
    this._service.logout().subscribe( {
      next: ( result ) => {
        this.responseMsg = result;
        if ( this.responseMsg.message === 'Signed out' ) {
          localStorage.removeItem( 'access_token' );
          this.router.navigate( ['/home'] );
        }

      }, error: ( error: any ) => {
        if ( error.status === 401 ) {
          localStorage.removeItem( 'access_token' );
          this.router.navigate( ["/home"] );
        }
      }
    } );
  }

  checkNav(): boolean {
    const token = localStorage.getItem( 'access_token' );
    return !!token;
  }

  ngOnInit(): void {
    // Retrieve theme preference from localStorage
    const storedTheme = localStorage.getItem('isDarkTheme');
    // If a theme preference is found, apply it
    if (storedTheme) {
      this.isDarkTheme = storedTheme === 'true';
      document.documentElement.classList.toggle('dark-theme', this.isDarkTheme);
    }
  }


  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.documentElement.classList.toggle('dark-theme', this.isDarkTheme);
    localStorage.setItem( 'isDarkTheme', `${this.isDarkTheme}` );
  }

}