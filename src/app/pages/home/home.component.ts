import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  books: any;
  booksByCategory: any;
  booksByAuthor: any;
  booksByPublisher: any;
  constructor( private adminService: AdminService, private userService:UserService) {
    
   }

  ngOnInit(): void {
    this.getAllBooks();
    this.getBooksByCategory();
  }


  getAllBooks(){
    this.adminService.getBooks().subscribe(
      (books) => {
        this.books = books
      }
    )
    
  }

  getBooksByCategory(){
    this.userService.getBooksByCategory({category:"Mystery"}).subscribe(
      (data) => {
        this.booksByCategory = data;
      }
    )
  }
  getBooksByAuthor(){
    this.userService.getBooksByCategory({author:"Mystery"}).subscribe(
      (data) => {
        this.booksByAuthor = data;
      }
    )
  }
  getBooksByPublisher(){
    this.userService.getBooksByCategory({publisher:"Mystery"}).subscribe(
      (data) => {
        this.booksByPublisher = data;
      }
    )
  }

}
