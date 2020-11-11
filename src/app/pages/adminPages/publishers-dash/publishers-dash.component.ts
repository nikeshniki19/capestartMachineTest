import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-publishers-dash',
  templateUrl: './publishers-dash.component.html',
  styleUrls: ['./publishers-dash.component.css']
})
export class PublishersDashComponent implements OnInit {

  publishers: any;
  formGroup: FormGroup;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllPublishers();
  }

  getAllPublishers(){
    this.adminService.getPublishers().subscribe(
      (authors) => {
        this.publishers = authors
      }
    )
    
  }

  createPublisher(){
    if(this.formGroup.valid){
      this.adminService.createPublisher(this.formGroup.value).subscribe(
        (data)=> {
          this.formGroup.setValue({name:""})
          alert("New Publisher Created");
          this.refreshData();
        }
      );
    }
    else{
      console.log(this.formGroup.errors)
    }

  }

  deletePublisher(publisherId){
    this.adminService.deletePublisher(publisherId).subscribe(
      (data) => {
        if(data){
          alert("Publisher Deleted");
          this.refreshData();
        }
      }
    )
  }

  refreshData(){
    this.getAllPublishers();
  }

  initForm(){
    this.formGroup = new FormGroup({
      name: new FormControl('',[Validators.required])      
    })
  }

}
