import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FreeBookService {
  constructor(private http: HttpClient) {}
  get_num_of_freeBooks(token: any) {
    return this.http.get(environment.baseUrl + '/num_free_books');
  }
  get_all_freeBooks(token: any) {
    return this.http.get(environment.baseUrl + '/free_books');
  }
  get_all_free_books_added_today(token: any) {
    return this.http.get(environment.baseUrl + '/free_books_added_today');
  }
  get_all_free_books_added_this_monthy(token: any) {
    return this.http.get(environment.baseUrl + '/free_books_added_this_month');
  }
  get_all_free_books_added_this_year(token: any) {
    return this.http.get(environment.baseUrl + '/free_books_added_this_year');
  }
}
