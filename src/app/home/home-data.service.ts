import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor( private http:HttpClient) { }

  executeHelloWorldServiceWithPathVariable(name) {
    
    return this.http.get<AuthenticationMessage>(
      `http://localhost:8080/basicauth`,
      
      );
    
  }
}
export class AuthenticationMessage{
  constructor(message:string) {}
}

