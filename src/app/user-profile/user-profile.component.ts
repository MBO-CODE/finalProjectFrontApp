import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../login/basic-authentication.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 
  basicAuthService: any;
  getAuthenticatedUser: Observable<String>;
  
  constructor(basicAuthService:BasicAuthenticationService, private router:Router) { }

     

  ngOnInit(): void {
    this.getAuthenticatedUser = this.basicAuthService.getAuthenticatedUser;
  }

}
