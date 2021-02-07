import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username:string;
 password:string;
  errorMessage ='Invalid Credentials';
  invalidLogin = false;

  constructor(
      public router: Router,
      public basicAuthenticationService: BasicAuthenticationService) {}
   

  ngOnInit() {
    document.body.style.background='url(\'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\') no-repeat';
  }

  handleAuthLogin(){
      this.basicAuthenticationService.executeServiceAuthentication(this.username, this.password)
      .subscribe (
          data => {
              console.log(data);
              sessionStorage.setItem('authenticatedUser', this.username);
              sessionStorage.setItem('token', 'Basic ' + window.btoa(this.username + ':' + this.password));
              this.router.navigate(['home'])
              this.invalidLogin = false;
          },
          error => {
              console.log(error)
              this.invalidLogin = true
          }
      )
        
    }
   
}

  


