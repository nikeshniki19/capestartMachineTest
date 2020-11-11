import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './pages/admin/admin.component'
import { HttpClientModule } from "@angular/common/http";
import { BooksDashComponent } from './pages/adminPages/books-dash/books-dash.component';
import { AuthorsDashComponent } from './pages/adminPages/authors-dash/authors-dash.component';
import { PublishersDashComponent } from './pages/adminPages/publishers-dash/publishers-dash.component';
import { CreateBookComponent } from './pages/adminPages/create-book/create-book.component';
import { UpdateBookComponent } from './pages/adminPages/update-book/update-book.component';
import { UpdateAuthorComponent } from './pages/adminPages/update-author/update-author.component';
import { UpdatePublisherComponent } from './pages/adminPages/update-publisher/update-publisher.component';
import { ViewBookComponent } from './pages/view-book/view-book.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    AdminComponent,
    BooksDashComponent,
    AuthorsDashComponent,
    PublishersDashComponent,
    CreateBookComponent,
    UpdateBookComponent,
    UpdateAuthorComponent,
    UpdatePublisherComponent,
    ViewBookComponent,
    MyBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
