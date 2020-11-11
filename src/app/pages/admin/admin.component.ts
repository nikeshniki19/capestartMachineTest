import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    admin:any;
    user:any;
  constructor(private authService: AuthService,
    private userService: UserService) {
    this.user = userService.getUser()
   }

  ngOnInit(): void {
  }

}
