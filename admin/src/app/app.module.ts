import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NavbarComponent } from './components/general-componants/navbar/navbar.component';
import { NotfoundComponent } from './components/general-componants/notfound/notfound.component';
import { AdminProfileComponent } from './components/admin-components/admin-profile/admin-profile.component';
import { AddBookComponent } from './components/admin-components/books/add-book/add-book.component';
import { EditProfileComponent } from './components/admin-components/edit-profile/edit-profile.component';
import { AllBooksComponent } from './components/admin-components/books/all-books/all-books.component';
import { MainChartsComponent } from './components/admin-components/charts/main-charts/main-charts.component';
import { ProfitAnnualComponent } from './components/admin-components/charts/profit-annual/profit-annual.component';
import { UserAddedByYearComponent } from './components/admin-components/charts/user-added-by-year/user-added-by-year.component';
import { UsersAddedPerMonthComponent } from './components/admin-components/charts/users-added-per-month/users-added-per-month.component';
import { EditBookComponent } from './components/admin-components/books/edit-book/edit-book.component';
import { FreeBooksComponent } from './components/admin-components/books/free-books/free-books.component';
import { PaidBooksComponent } from './components/admin-components/books/paid-books/paid-books.component';
import { NoDataComponent } from './components/general-componants/no-data/no-data.component';
import { MainUsersComponent } from './components/admin-components/users/main-users/main-users.component';
import { VerifiedUsersComponent } from './components/admin-components/users/verified-users/verified-users.component';
import { NotVerifiedUsersComponent } from './components/admin-components/users/not-verified-users/not-verified-users.component';
import { AllProfitsComponent } from './components/admin-components/charts/all-profits/all-profits.component';
import { MonthlyProfitComponent } from './components/admin-components/charts/monthly-profit/monthly-profit.component';
import { AllSalesComponent } from './components/admin-components/charts/all-sales/all-sales.component';
import { BookSalesComponent } from './components/admin-components/charts/book-sales/book-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    AdminProfileComponent,
    AddBookComponent,
    EditProfileComponent,
    AllBooksComponent,
    MainChartsComponent,
    ProfitAnnualComponent,
    UserAddedByYearComponent,
    UsersAddedPerMonthComponent,
    EditBookComponent,
    FreeBooksComponent,
    PaidBooksComponent,
    NoDataComponent,
    MainUsersComponent,
    VerifiedUsersComponent,
    NotVerifiedUsersComponent,
    AllProfitsComponent,
    MonthlyProfitComponent,
    AllSalesComponent,
    BookSalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
