import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { BookGuard } from './guards/book.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotfoundComponent } from './components/general-components/notfound/notfound.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HomeComponent } from './components/general-components/home/home.component';
import { ShowBooksComponent } from './components/user-components/show-books/show-books.component';
import { BookDetailsComponent } from './components/user-components/book-details/book-details.component';
import { BooksDepComponent } from './components/user-components/books-dep/books-dep.component';
import { MyCartComponent } from './components/user-components/my-cart/my-cart.component';
import { ProfileComponent } from './components/user-components/profile/profile.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { path: 'forgetPassword', component: ForgetPasswordComponent, canActivate: [AuthGuard] },
  { path: 'verification', component: VerificationComponent, canActivate: [AuthGuard] },
  { path: 'resetPassword', component: ResetPasswordComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'viewAll/:type', component: ShowBooksComponent },
  { path: 'categories/:type', component: BooksDepComponent },
  { path: 'bookDetails/:id', component: BookDetailsComponent },
  { path: 'myCart/:id', component: MyCartComponent, canActivate: [BookGuard] },
  { path: 'profile/showYourPaidBooks', component: ProfileComponent, canActivate: [BookGuard] },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  } ),],

  exports: [RouterModule],
} )
export class AppRoutingModule { }
