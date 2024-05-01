import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './components/general-componants/notfound/notfound.component';
import { AdminProfileComponent } from './components/admin-components/admin-profile/admin-profile.component';
import { EditProfileComponent } from './components/admin-components/edit-profile/edit-profile.component';
import { AllBooksComponent } from './components/admin-components/books/all-books/all-books.component';
import { AddBookComponent } from './components/admin-components/books/add-book/add-book.component';
import { MainChartsComponent } from './components/admin-components/charts/main-charts/main-charts.component';
import { EditBookComponent } from './components/admin-components/books/edit-book/edit-book.component';
import { FreeBooksComponent } from './components/admin-components/books/free-books/free-books.component';
import { PaidBooksComponent } from './components/admin-components/books/paid-books/paid-books.component';
import { MainUsersComponent } from './components/admin-components/users/main-users/main-users.component';
import { BookGuard } from './guards/book.guard';
import { VerifiedUsersComponent } from './components/admin-components/users/verified-users/verified-users.component';
import { NotVerifiedUsersComponent } from './components/admin-components/users/not-verified-users/not-verified-users.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin/profile',
    component: AdminProfileComponent,
    canActivate: [BookGuard],
  },
  {
    path: 'admin/profile/editProfile',
    component: EditProfileComponent,
    canActivate: [BookGuard],
  },
  {
    path: 'admin/books',
    component: AllBooksComponent,
    canActivate: [BookGuard],
  },
  {
    path: 'admin/freeBook',
    component: FreeBooksComponent,
    canActivate: [BookGuard],
  },
  {
    path: 'admin/paidBook',
    component: PaidBooksComponent,
    canActivate: [BookGuard],
  },
  { path: 'admin/books/addBook', component: AddBookComponent },
  { path: 'admin/charts', component: MainChartsComponent },
  { path: 'admin/addBook', component: AddBookComponent },
  {
    path: 'admin/editBook/:id',
    component: EditBookComponent,
    canActivate: [BookGuard],
  },
  {
    path: 'admin/users',
    component: MainUsersComponent,
    canActivate: [BookGuard],
  },
  {
    path: 'admin/users/verifiedUsers',
    component: VerifiedUsersComponent,
    canActivate: [BookGuard],
  },
  {
    path: 'admin/users/notVerifiedUsers',
    component: NotVerifiedUsersComponent,
    canActivate: [BookGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
