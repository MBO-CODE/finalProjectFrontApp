import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient,
              private router:Router) { }


  executeServiceAuthentication(username, password){
   
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationMessage>(
      `http://localhost:8080/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )

      );

    
  }
  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser'); 
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem('token')
  }

 isUserLoggedIn() {
   let user = sessionStorage.getItem('authenticatedUser')
   return !(user === null)
    
  }

  loggedin(){
    return !!sessionStorage.getItem('token')
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
    sessionStorage.removeItem('token')
    this.router.navigate(['/login']);
  }


}
export class AuthenticationMessage {
  constructor(public message:string) {}
}


