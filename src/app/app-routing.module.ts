import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerComponent } from './trainer/trainer.component';
import { ProgramComponent } from './program/program.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuardService} from './login/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';



const routes: Routes = [
{ path: '', component: LoginComponent, canActivate:[AuthGuardService] },
{path: '', pathMatch:"full", redirectTo:"/home"},
{path:'login', component:LoginComponent},
{path:'trainer', component:TrainerComponent, canActivate:[AuthGuardService]},
{path:'program', component:ProgramComponent,canActivate:[AuthGuardService]},
{path: 'course', component:CourseComponent, canActivate:[AuthGuardService]},
{path:'logout', component:LogoutComponent, canActivate: [AuthGuardService]},
{path:'home', component:HomeComponent, canActivate:[AuthGuardService]},
{path:'contact', component:ContactComponent},
{path:'user-profile', component:UserProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
