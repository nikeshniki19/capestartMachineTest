import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-books-dash',
  templateUrl: './books-dash.component.html',
  styleUrls: ['./books-dash.component.css']
})
export class BooksDashComponent implements OnInit {

  books: any;

  constructor(
    private adminService: AdminService,
    private userService: UserService) { 

  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  deleteBook(bookId){
    this.adminService.deleteBook(bookId).subscribe(
      (data) => {
        if(data){
          alert("Book Deleted");
          this.refreshData();
        }
      }
    )

  }

  getAllBooks(){
    this.adminService.getBooks().subscribe(
      (books) => {
        this.books = books
      }
    )
    
  }

  refreshData(){
    this.getAllBooks();
  }

}
