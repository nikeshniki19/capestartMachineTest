import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-publisher',
  templateUrl: './update-publisher.component.html',
  styleUrls: ['./update-publisher.component.css']
})
export class UpdatePublisherComponent implements OnInit {

  publisherId:any;
  publisher:any;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService, private router: Router) { 
    this.publisherId = this.activatedRoute.snapshot.paramMap.get("publisherId");
    this.adminService.getPublisherById(this.publisherId).subscribe(
      (data) => {
        this.publisher = data
        this.initForm();
      }
    )
  }
  formGroup: FormGroup;

  ngOnInit(): void {
  }

  updatePublisher(){
    this.adminService.updatePublisher(this.formGroup.value,this.publisherId).subscribe(
      (data)=> {
        this.formGroup.setValue({name:""})
        if(confirm("Publisher Updated")){
          this.router.navigate(['/publishers-dashboard']);
        }
      }
    )
  }

  initForm(){
    this.formGroup = new FormGroup({
      name: new FormControl(this.publisher.name,[Validators.required])      
    })
  }
}
