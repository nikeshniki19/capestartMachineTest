import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  authors: any;
  publishers: any;

  formGroup: FormGroup;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
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

  createBook(){
    const bookForm = new FormData()
    bookForm.append('name',this.formGroup.get('bookName').value)
    bookForm.append('author',this.formGroup.get('author').value)
    bookForm.append('publisher',this.formGroup.get('publisher').value)
    bookForm.append('category',this.formGroup.get('category').value)
    bookForm.append('lendedUser','')
    bookForm.append('photo',this.formGroup.get('cover').value)
    this.adminService.createBook(bookForm).subscribe(
      (data)=> {
        if(confirm("New Book Created")){
          this.router.navigate(['/books-dashboard']);
        }
        
      }
    );
  }



  initForm(){
    this.formGroup = new FormGroup({
      bookName: new FormControl('',[Validators.required]),      
      category: new FormControl('',[Validators.required]),      
      author: new FormControl('',[Validators.required]),      
      publisher: new FormControl('',[Validators.required]),      
      cover: new FormControl('',[Validators.required]),      
    })
  }

}
