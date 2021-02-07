import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerComponent } from './trainer/trainer.component';
import { ShowTrainerComponent } from './trainer/show-trainer/show-trainer.component';
import { AddEditTrainerComponent } from './trainer/add-edit-trainer/add-edit-trainer.component';
import { SharedService} from './shared.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramComponent } from './program/program.component';
import { ShowProgramComponent } from './program/show-program/show-program.component';
import { AddEditProgComponent } from './program/add-edit-prog/add-edit-prog.component';
import { CourseComponent } from './course/course.component';
import { ShowCourseComponent } from './course/show-course/show-course.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';
import { HttpInterceptorService } from './login/http/http-interceptor.service';
import { BasicAuthenticationService } from './login/basic-authentication.service';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';





@NgModule({
  declarations: [
    AppComponent,
    TrainerComponent,
    ShowTrainerComponent,
    AddEditTrainerComponent,
    ProgramComponent,
    ShowProgramComponent,
    AddEditProgComponent,
    CourseComponent,
    ShowCourseComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    ContactComponent,
    FooterComponent,
    UserProfileComponent,
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService,
    { provide: HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi: true},
      
    

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }


