import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = "http://localhost:8000";
  token:any;
  user_id:any;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = authService.getToken();
    this.user_id = authService.getUser()._id
   }


  //Books CRUD functions 
  getBooks(){
    return this.http.get<any>(`${this.url}/api/books`);
  }
  getBookById(bookId){
    return this.http.get<any>(`${this.url}/api/book/${bookId}`);
  }
  createBook(book){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` });
    return this.http.post(`${this.url}/api/book/create/${this.user_id}`,book, {headers: headers});
  }

  updateBook(book,bookId){
    console.log(bookId)
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` });
    return this.http.put(`${this.url}/api/book/${bookId}/${this.user_id}`,book,{headers: headers});
  }

  deleteBook(bookId:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` });
    return this.http.delete(`${this.url}/api/book/${bookId}/${this.user_id}`,{headers: headers});
  }

  

  //Author CRUD functions
  getAuthors(){
    return this.http.get<any>(`${this.url}/api/authors`);
  }
  getAuthorById(authorId){
    return this.http.get<any>(`${this.url}/api/author/${authorId}`);
  }
  createAuthor(author){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` });
    return this.http.post(`${this.url}/api/author/create/${this.user_id}`,author, {headers: headers});
  }

  updateAuthor(author,authorId){
    console.log(author)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` });
    return this.http.put(`${this.url}/api/author/${authorId}/${this.user_id}`,author, {headers: headers})
  }

  deleteAuthor(authorId:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` });
    return this.http.delete(`${this.url}/api/author/${authorId}/${this.user_id}`,{headers: headers});
  }

  //Publisher CRUD functions
  getPublishers(){
    return this.http.get<any>(`${this.url}/api/publishers`)
  }
  getPublisherById(publisherId){
    return this.http.get<any>(`${this.url}/api/publisher/${publisherId}`);
  }
  createPublisher(publisher){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` });
    return this.http.post(`${this.url}/api/publisher/create/${this.user_id}`,publisher, {headers: headers});
  }

  updatePublisher(publisher, publisherId){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` });
    return this.http.put(`${this.url}/api/publisher/${publisherId}/${this.user_id}`,publisher, {headers: headers})
  }

  deletePublisher(publisherId:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` });
    return this.http.delete(`${this.url}/api/publisher/${publisherId}/${this.user_id}`,{headers: headers});
  }


}
