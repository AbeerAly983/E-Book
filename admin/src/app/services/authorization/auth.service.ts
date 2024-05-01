import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  userData: any = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    if (localStorage.getItem('access_token') !== null) {
      this.decodeUserData();
    }
  }
  ngOnInit(): void {}

  decodeUserData() {
    const encodedToken = localStorage.getItem('access_token');

    if (encodedToken) {
      const decodedToken: any = jwtDecode(encodedToken);
      this.userData.next(decodedToken);
    }
  }

  login(data: any) {
    return this.http.post(environment.baseUrl + '/login', data);
  }

  logout() {
    return this.http.post(environment.baseUrl + '/logout', {});
  }
}
