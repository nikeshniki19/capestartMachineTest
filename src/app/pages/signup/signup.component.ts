import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitSignup(){
    if(this.formGroup.valid){
      this.authService.register(this.formGroup.value).subscribe();
    }
    else{
      console.log(this.formGroup.errors)
    }

  }
  get name(){
    return this.formGroup.get('name')
  }
  get email(){
    return this.formGroup.get('email')
  }
  get password(){
    return this.formGroup.get('password')
  }

  initForm(){
    this.formGroup = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)])
    })
  }

}
