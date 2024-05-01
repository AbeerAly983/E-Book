import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  getAllBooks(token: any) {
    return this.http.get(environment.baseUrl + '/allBooks');
  }
  getBookById(id: any) {
    return this.http.get(environment.baseUrl + `/editBook/${id}`, {});
  }

  editBook(id: any, car: any) {
    return this.http.post(environment.baseUrl + `/updateBook/${id}`, car, {});
  }

  addBook(data: FormData) {
    return this.http.post(environment.baseUrl + '/addBook', data);
  }
}
