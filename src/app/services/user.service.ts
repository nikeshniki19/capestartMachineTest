import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:8000';
  token: any;
  user_id: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = authService.getToken();
    this.user_id = authService.getUser()._id;
  }

  getUser() {
    let user: any;
    user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  getBookById(bookId) {
    return this.http.get<any>(`${this.url}/api/book/${bookId}`);
  }

  getLendedBooks(){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` });
    return this.http.get<any>(`${this.url}/api/lendedBooks/${this.user_id}`,{headers:headers})
  }

  lendBook(bookId) {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` });
    return this.http.put<any>(`${this.url}/api/books/lend/${bookId}/${this.user_id}`,bookId,{headers:headers});
  }

  returnBook(bookId) {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return this.http.put<any>(`${this.url}/api/books/return/${bookId}/${this.user_id}`,bookId,{headers:headers});
  }

  getBooksByCategory(category){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` });
    return this.http.post<any>(`${this.url}/api/books/category/${this.user_id}`,category,{headers:headers})
  }
  getBooksByAuthor(author){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` });
    return this.http.post<any>(`${this.url}/api/books/author/${this.user_id}`,author,{headers:headers})
  }
  getBooksByPublisher(publisher){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` });
    return this.http.post<any>(`${this.url}/api/books/publisher/${this.user_id}`,publisher,{headers:headers})
  }
}
