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

  category:any;
  author:any;
  publisher:any;


  constructor( private adminService: AdminService, private userService:UserService) {
   }

  ngOnInit(): void {
    this.getAllBooks();
    
  }


  getAllBooks(){
    this.adminService.getBooks().subscribe(
      (books) => {
        this.books = books
      }
    )
    
  }

  getBooksByCategory(){
    this.booksByCategory = []
    this.userService.getBooksByCategory({category:this.category}).subscribe(
      (data) => {
        this.booksByCategory = data;
      }
    )
  }
  getBooksByAuthor(){
    this.userService.getBooksByAuthor({author:this.author}).subscribe(
      (data) => {
        this.booksByAuthor = data;
      }
    )
  }
  getBooksByPublisher(){
    this.userService.getBooksByPublisher({publisher:this.publisher}).subscribe(
      (data) => {
        this.booksByPublisher = data;
      }
    )
  }

}
