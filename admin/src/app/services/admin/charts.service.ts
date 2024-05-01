import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  constructor(private http: HttpClient) {}

  users_added_by_year(token: any) {
    return this.http.get(environment.baseUrl + '/users_added_by_year', {});
  }
  users_added_per_month_this_year(token: any) {
    return this.http.get(
      environment.baseUrl + '/users_added_per_month_this_year',
      {}
    );
  }
  all_profits(token: any) {
    return this.http.get(environment.baseUrl + '/Profits', {});
  }
  AnnualProfits(token: any) {
    return this.http.get(environment.baseUrl + '/ProfitsPerYear', {});
  }
  Profits_per_month_this_year(token: any) {
    return this.http.get(
      environment.baseUrl + '/Profits_per_month_this_year',
      {}
    );
  }
  sales(token: any) {
    return this.http.get(environment.baseUrl + '/Sales', {});
  }
  bookSales(token: any) {
    return this.http.get(environment.baseUrl + '/bookSales', {});
  }
}
