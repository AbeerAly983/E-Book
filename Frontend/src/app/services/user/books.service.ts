import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePassword } from 'src/app/interfaces/User';
import { PaymentInfo } from 'src/app/interfaces/book';
import { environment } from 'src/environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class BooksService {

  constructor( private http: HttpClient ) { }

  getAllBooks() {
    return this.http.get( `${environment.baseUrl}/AllBooks` );
  }

  getFreeBooks() {
    return this.http.get( `${environment.baseUrl}/FreeBooks` );
  }

  getPaidBooks() {
    return this.http.get( `${environment.baseUrl}/PaidBooks` );
  }

  getBookDetails( id: number ) {
    return this.http.get( `${environment.baseUrl}/BookDetails/${id}` );
  }

  getDeps() {
    return this.http.get( `${environment.baseUrl}/Departments` );
  }

  getBooksDep( type: string ) {
    return this.http.get( `${environment.baseUrl}/BooksOfDepartment/${type}` );
  }

  getSrcPaidBook( id: number ) {
    return this.http.get( `${environment.baseUrl}/PaidBookRead/${id}` );
  }
  getSrcPaidBookDownload( id: number ) {
    return this.http.get( `${environment.baseUrl}/PaidBookDownload/${id}` );
  }

  getSrcFreeBook( id: number ) {
    return this.http.get( `${environment.baseUrl}/FreeRead/${id}` );
  }
  getSrcFreeBookDownload( id: number ) {
    return this.http.get( `${environment.baseUrl}/FreeDownload/${id}` );
  }

  // payment 
  makePayment( data: PaymentInfo ) {
    return this.http.post( `${environment.baseUrl}/makePayment`, data )
  }

  getUserPaidBooks() {
    return this.http.get( `${environment.baseUrl}/userBooks` );
  }

  getUserData() {
    return this.http.get( `${environment.baseUrl}/edit_user` );
  }
  
  changePassword( data: ChangePassword ) {
    return this.http.post( `${environment.baseUrl}/change_user_password`, data );
  }

}
