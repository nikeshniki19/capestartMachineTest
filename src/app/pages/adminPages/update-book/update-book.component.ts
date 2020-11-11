import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  authors: any;
  publishers: any;
  bookId: any
  book:any;
  formGroup: FormGroup;

  constructor(private adminService: AdminService, private router: Router,private activatedRoute: ActivatedRoute) {
    this.bookId = this.activatedRoute.snapshot.paramMap.get("bookId");
    this.adminService.getBookById(this.bookId).subscribe(
      (data) => {
        this.book = data
        if(data){
          this.initForm();
        }
      }
    )
    this.adminService.getAuthors().subscribe(
      (authors) => {
        this.authors = authors
      }
    )
    this.adminService.getPublishers().subscribe(
      (publishers) => {
        this.publishers = publishers
      }
    )
    
   }

  ngOnInit(): void {
    this.adminService.getAuthors().subscribe(
      (authors) => {
        this.authors = authors
      }
    )
    this.adminService.getPublishers().subscribe(
      (publishers) => {
        this.publishers = publishers
      }
    )
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formGroup.get('cover').setValue(file);
    }
  }

  UpdateBook(){
    const bookForm = new FormData()
    bookForm.append('name',this.formGroup.get('bookName').value)
    bookForm.append('author',this.formGroup.get('author').value)
    bookForm.append('publisher',this.formGroup.get('publisher').value)
    bookForm.append('category',this.formGroup.get('category').value)
    bookForm.append('lendedUser',this.book.lendedUser)
    bookForm.append('photo',this.formGroup.get('cover').value)
    this.adminService.updateBook(bookForm,this.bookId).subscribe(
      (data)=> {
        if(confirm("Book Updated")){
          this.router.navigate(['/books-dashboard']);
        }
        
      }
    );
  }


  initForm(){
    this.formGroup = new FormGroup({
      bookName: new FormControl(this.book.name,[Validators.required]),      
      category: new FormControl(this.book.category,[Validators.required]),      
      author: new FormControl(this.book.author,[Validators.required]),      
      publisher: new FormControl(this.book.publisher,[Validators.required]),      
      cover: new FormControl(this.book.photo,[Validators.required]),      
    })
  }

}
