import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HomeComponent } from './components/general-components/home/home.component';
import { FooterComponent } from './components/general-components/footer/footer.component';
import { NavbarComponent } from './components/general-components/navbar/navbar.component';
import { NotfoundComponent } from './components/general-components/notfound/notfound.component';
import { BookDetailsComponent } from './components/user-components/book-details/book-details.component';
import { ShowBooksComponent } from './components/user-components/show-books/show-books.component';
import { BooksDepComponent } from './components/user-components/books-dep/books-dep.component';
import { ProfileComponent } from './components/user-components/profile/profile.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MyCartComponent } from './components/user-components/my-cart/my-cart.component';
import { ChangUserPasswordComponent } from './components/user-components/chang-user-password/chang-user-password.component';
import { CarouselComponent } from './components/user-components/carousel/carousel.component'

@NgModule( {
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    VerificationComponent,
    ResetPasswordComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    NotfoundComponent,
    BookDetailsComponent,
    ShowBooksComponent,
    BooksDepComponent,
    ProfileComponent,
    MyCartComponent,
    ChangUserPasswordComponent,
    CarouselComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
} )
export class AppModule { }
