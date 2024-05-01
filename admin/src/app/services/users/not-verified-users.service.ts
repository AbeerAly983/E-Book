import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotVerifiedUsersService {
  constructor(private http: HttpClient) {}
  get_num_of_not_verified_users(token: any) {
    return this.http.get(environment.baseUrl + '/num_not_verify_users');
  }
  get_all_not_verified_users(token: any) {
    return this.http.get(environment.baseUrl + '/all_not_verify_users');
  }
  get_all_not_verified_users_today(token: any) {
    return this.http.get(environment.baseUrl + '/not_verify_users_added_today');
  }
  get_all_not_verified_users_this_monthy(token: any) {
    return this.http.get(
      environment.baseUrl + '/not_verify_users_added_this_month'
    );
  }
  get_all_not_verified_users_this_year(token: any) {
    return this.http.get(
      environment.baseUrl + '/not_verify_users_added_this_year'
    );
  }
  delete_not_verified_users(id: number) {
    return this.http.get(
      environment.baseUrl + `/delete_not_verify_user/${id}`,
      {}
    );
  }
}
