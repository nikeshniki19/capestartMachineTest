import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitLogin(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe();
    }
    else{
      console.log(this.formGroup.errors)
    }

  }
  get email(){
    return this.formGroup.get('email')
  }
  get password(){
    return this.formGroup.get('password')
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)])
    })
  }

}
