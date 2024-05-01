import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VerifiedUsersService {
  constructor(private http: HttpClient) {}
  get_num_of_verified_users(token: any) {
    return this.http.get(environment.baseUrl + '/num_users');
  }
  get_all_verified_users(token: any) {
    return this.http.get(environment.baseUrl + '/all_users');
  }
  get_all_verified_users_today(token: any) {
    return this.http.get(environment.baseUrl + '/users_added_today');
  }
  get_all_verified_users_this_monthy(token: any) {
    return this.http.get(environment.baseUrl + '/users_added_this_month');
  }
  get_all_verified_users_this_year(token: any) {
    return this.http.get(environment.baseUrl + '/users_added_this_year');
  }
}
