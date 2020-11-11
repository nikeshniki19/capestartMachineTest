import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';

import { AuthorsDashComponent } from './pages/adminPages/authors-dash/authors-dash.component';
import { UpdateAuthorComponent } from './pages/adminPages/update-author/update-author.component'

import { BooksDashComponent } from './pages/adminPages/books-dash/books-dash.component';
import { CreateBookComponent } from './pages/adminPages/create-book/create-book.component';
import { UpdateBookComponent } from './pages/adminPages/update-book/update-book.component';

import { PublishersDashComponent } from './pages/adminPages/publishers-dash/publishers-dash.component';
import { UpdatePublisherComponent } from './pages/adminPages/update-publisher/update-publisher.component'; 

import { ViewBookComponent } from './pages/view-book/view-book.component';
import { MyBooksComponent } from './pages/my-books/my-books.component'



import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    data:{role:"admin"}
  },
  {
    path: 'books-dashboard',
    component: BooksDashComponent,
    canActivate: [AuthGuardService],
    data:{role:"admin"}
  },
  {
    path: 'create-book',
    component: CreateBookComponent,
    canActivate: [AuthGuardService],
    data:{role:"admin"}
  },
  {
    path: 'update-book/:bookId',
    component: UpdateBookComponent,
    canActivate: [AuthGuardService],
    data:{role:"admin"}
  },
  {
    path: 'authors-dashboard',
    component: AuthorsDashComponent,
    canActivate: [AuthGuardService],
    data:{role:"admin"}
  },
  {
    path: 'update-author/:authorId',
    component: UpdateAuthorComponent,
    canActivate: [AuthGuardService],
    data:{role:"admin"}
  },
  {
    path: 'publishers-dashboard',
    component: PublishersDashComponent,
    canActivate: [AuthGuardService],
    data:{role:"admin"}
  },
  {
    path: 'update-publisher/:publisherId',
    component: UpdatePublisherComponent,
    canActivate: [AuthGuardService],
    data:{role:"admin"}
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'view-book/:bookId',
    component: ViewBookComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'my-books',
    component: MyBooksComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
