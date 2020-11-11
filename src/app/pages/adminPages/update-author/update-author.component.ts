import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  authorId:any;
  author:any;
  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService, private router: Router) {
    this.authorId = this.activatedRoute.snapshot.paramMap.get("authorId");
    this.adminService.getAuthorById(this.authorId).subscribe(
      (data) => {
        this.author = data
        this.initForm();
      }
    )
   }

  formGroup: FormGroup;
  ngOnInit(): void {
    
  }

  updateAuthor(){
    this.adminService.updateAuthor(this.formGroup.value,this.authorId).subscribe(
      (data)=> {
        this.formGroup.setValue({name:""})
        if(confirm("Author Updated")){
          this.router.navigate(['/authors-dashboard']);
        }
      }
    )
  }

  initForm(){
    this.formGroup = new FormGroup({
      name: new FormControl(this.author.name,[Validators.required])      
    })
  }

}
