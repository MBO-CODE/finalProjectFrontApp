import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../login/user.service';
import { BasicAuthenticationService } from '../login/basic-authentication.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HomeDataService } from './home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  loading = false;
  users: User[] = [];
  name= '';
  message ='Some welcome message';
  welcomeMessageFromService:string;
  

  constructor(private userService: UserService,
    public basicAuthenticationService : BasicAuthenticationService,
    private http:HttpClient,
    private route:ActivatedRoute,
    private service:HomeDataService


    ) { }

  ngOnInit(): void {
    document.body.classList.add('bodycustom');
    document.body.style.background='#000';
    document.body.style.background='url(\'https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260\') no-repeat';
    document.body.style.backgroundSize="cover";
   
    this.isUserLoggedIn = this.basicAuthenticationService.isUserLoggedIn()
    this.name = this.route.snapshot.params['name'];

  }

  

  getWelcomeMessageWithParameter() {
   this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      respone => this.handleSuccessfulResponse(respone),
      error => this.handleErrorResponse(error)
    );

  }

  
  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }

  

}


