import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';




@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
   private basicAuthenticationService: BasicAuthenticationService
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler) {
    
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();
   

    // alert(username);
    // alert(basicAuthHeaderString);

    if(basicAuthHeaderString && username) {
     request = request.clone({
         setHeaders:{
             Authorization: basicAuthHeaderString
             
         }
     })
  }

    
     return next.handle(request);

  }
}