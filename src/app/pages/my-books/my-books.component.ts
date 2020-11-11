import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  mybooks: any;

  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
    this.getMyBooks();
  }


  getMyBooks(){
    this.userService.getLendedBooks().subscribe(
      (data) => {
        this.mybooks = data;
      }
    )
  }
  
  returnBook(bookId){
    this.userService.returnBook(bookId).subscribe(
      (data) => {
        alert("Book Returned");
        this.refreshData()
      }
    )
  }
  refreshData(){
    this.getMyBooks();
  }

}
