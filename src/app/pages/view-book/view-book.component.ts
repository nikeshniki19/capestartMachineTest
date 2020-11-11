import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  bookId:any;
  book:any;
  imageurl:any;
  availability:boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {
    this.bookId = this.activatedRoute.snapshot.paramMap.get("bookId");
    this.getBookDetails(this.bookId);
   }

  ngOnInit(): void {
    
  }

  getBookDetails(bookId){
    this.imageurl = `http://localhost:8000/api/book/photo/${bookId}`
    this.userService.getBookById(bookId).subscribe(
      (data)=>{
        this.book = data;
        if(data.lendedUser == ''){
          this.availability = true;
        }
      }
    );
    
  }

  lendBook(bookId){
    this.userService.lendBook(bookId).subscribe(
      (data) => {
        if(data){
          alert("Book Lended");
        }
      }
    )
  }

}
