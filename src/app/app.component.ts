import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from './login/basic-authentication.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrainerApp';
  


 

  constructor(public _basicAuthService:BasicAuthenticationService,
              private router:Router){}
      
  logout(){
    // sessionStorage.removeItem('authenticateUser')
    sessionStorage.removeItem('token')
    this.router.navigate(['/home']);
  }
}
