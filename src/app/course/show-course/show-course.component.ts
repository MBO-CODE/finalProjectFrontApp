import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from 'src/app/model/course-model';
import { Trainer } from 'src/app/model/trainer-model';
import { SharedService } from 'src/app/shared.service';
import { CourseComponent } from '../course.component';


@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})
export class ShowCourseComponent implements OnInit {

  constructor(private service:SharedService) { }
  course: CourseModel = new CourseModel();

 
  courseId:number;
  csName:string;
  csDate:Date;
  details:string;
  trainerLs:Trainer[]= [];
  trainer:Trainer = new Trainer();
  

  CourseList:any =[];
  CourseDateFilter:string ="";
  CourseNameFilter:string="";
  CourseListWithoutFilter:any=[];
  

  ngOnInit(): void {
    this.loadCourseList();
    this.refreshCourseList();
    document.body.classList.add('bodycustom');
    document.body.style.background='#000';
    document.body.style.background='url(\'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\') no-repeat';
    document.body.style.backgroundSize="cover";
  }

  refreshCourseList(){
    this.service.getCourseList().subscribe(data =>{
      this.CourseList = data;
      this.CourseListWithoutFilter = data;
    });
  }

  addCourse(){
    var val = {courseId:this.courseId,
              csName:this.csName,
              csDate:this.csDate,
              details:this.details,
              trainerLs:this.trainerLs};
        this.service.addCourse(val).subscribe(res=>{
          alert(res.toString());
         
        });
      }


      FilterFn(){
        var CourseDateFilter= this.CourseDateFilter;
        var CourseNameFilter= this.CourseNameFilter;
        
  
     this.CourseList = this.CourseListWithoutFilter.filter(function(el){
        return el.csDate.toString().toLowerCase().includes(
          CourseDateFilter.toString().trim().toLowerCase()
        ) &&
        el.csName.toString().toLowerCase().includes(
          CourseNameFilter.toString().trim().toLowerCase()
        )
      });
  
    }


    updateCourse(){
      var val = {courseId:this.courseId,
        csName:this.csName,
        csDate:this.csDate,
        details:this.details,
        trainerLS:this.trainerLs,
        trainer:this.trainer
        };
      this.service.updateTrainer(val).subscribe(res=>{
        alert(res.toString());
    });
  
    }

    loadCourseList(){
      this.service.getTrainerList().subscribe((data:any) =>{
        this.trainerLs = data;

        this.courseId = this.course.courseId;
        this.csName = this.course.csName;
        this.csDate = this.course.csDate;
        this.details = this.course.details;
        


      });
    }
  
  }
    

