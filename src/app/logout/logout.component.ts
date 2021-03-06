import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../login/basic-authentication.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  isLoggedIn = false;
  
  constructor(private basicAuthenticationService: BasicAuthenticationService, 
              private router:Router)
    

   { }

  ngOnInit() {
    
    this.basicAuthenticationService.logout();
    this.router.navigate(['login']);
  }




}