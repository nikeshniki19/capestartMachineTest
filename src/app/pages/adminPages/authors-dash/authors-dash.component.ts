import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-authors-dash',
  templateUrl: './authors-dash.component.html',
  styleUrls: ['./authors-dash.component.css']
})
export class AuthorsDashComponent implements OnInit {

  authors: any;
  formGroup: FormGroup;

  constructor(private adminService: AdminService) {
    
   }

  ngOnInit(): void {
    this.initForm();
    this.getAllAuthors();
  }

  getAllAuthors(){
    this.adminService.getAuthors().subscribe(
      (authors) => {
        this.authors = authors
      }
    )
    
  }

  createAuthor(){
    if(this.formGroup.valid){
      this.adminService.createAuthor(this.formGroup.value).subscribe(
        (data)=> {
          this.formGroup.setValue({name:""})
          alert("New Author Created");
          this.refreshData();
        }
      );
    }
    else{
      console.log(this.formGroup.errors)
    }

  }

  deleteAuthor(id){
    this.adminService.deleteAuthor(id).subscribe(
      (data) => {
        if(data){
          alert("Author Deleted");
          this.refreshData();
        }
      }
    )
    
  }

  refreshData(){
    this.getAllAuthors();
  }

  initForm(){
    this.formGroup = new FormGroup({
      name: new FormControl('',[Validators.required])      
    })
  }

}
