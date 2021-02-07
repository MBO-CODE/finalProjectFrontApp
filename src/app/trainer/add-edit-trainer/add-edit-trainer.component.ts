import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-trainer',
  templateUrl: './add-edit-trainer.component.html',
  styleUrls: ['./add-edit-trainer.component.css']
})
export class AddEditTrainerComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() trainer:any;
  trainerID:string;
  name:string;
  gym:string;
  email:string;
  age:string;
  photoFile:string;
  trainerInfo:string;


  ngOnInit(): void {
    this.trainerID=this.trainer.trainerID;
    this.name=this.trainer.name;
    this.gym=this.trainer.gym;
    this.email=this.trainer.email;
    this.age=this.trainer.age;
    this.photoFile=this.trainer.photoFile;
    this.trainerInfo=this.trainer.trainerInfo;
  }

  addTrainer(){
    var val = {trainerID:this.trainerID,
              name:this.name,
              gym:this.gym,
              email:this.email,
              age:this.age,
              photoFile:this.photoFile,
              trainerInfo:this.trainerInfo};
        this.service.addTrainer(val).subscribe(res=>{
          alert("New trainer added!");
         
        });
      }
       
    

  updateTrainer(){
    var val = {trainerID:this.trainerID,
      name:this.name,
      age:this.age,
      gym:this.gym,
      email:this.email,
      photoFile:this.photoFile,
      trainerInfo:this.trainerInfo
      };
    this.service.updateTrainer(val).subscribe(res=>{
      alert("Updated successfully!");
  });

  }

}
