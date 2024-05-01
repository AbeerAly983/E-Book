import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaidBookService {
  constructor(private http: HttpClient) {}
  get_num_of_paidBooks(token: any) {
    return this.http.get(environment.baseUrl + '/num_paid_books');
  }
  get_all_paidBooks(token: any) {
    return this.http.get(environment.baseUrl + '/paid_books');
  }
  get_all_paid_books_added_today(token: any) {
    return this.http.get(environment.baseUrl + '/paid_books_added_today');
  }
  get_all_paid_books_added_this_monthy(token: any) {
    return this.http.get(environment.baseUrl + '/paid_books_added_this_month');
  }
  get_all_paid_books_added_this_year(token: any) {
    return this.http.get(environment.baseUrl + '/paid_books_added_this_year');
  }
}
