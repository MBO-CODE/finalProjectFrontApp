import { Component, OnInit, Input } from '@angular/core';
import { Trainer } from 'src/app/model/trainer-model';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-prog',
  templateUrl: './add-edit-prog.component.html',
  styleUrls: ['./add-edit-prog.component.css']
})
export class AddEditProgComponent implements OnInit {


  constructor(private service:SharedService) { }

  @Input() program:any;
  programID:string;
  progName:string;
  category:string;
  description:string;
  trainersList:Trainer[]= [];
  trainer:Trainer = new Trainer();
  

  ngOnInit(): void {
    this.trainer=new Trainer();
    this.loadProgramList();
  }

  loadProgramList(){
    this.service.getTrainerList().subscribe((data:any)=>{
    this.trainersList = data;
    
    this.programID=this.program.programID;
    this.progName=this.program.progName;
    this.category=this.program.category;
    this.description=this.program.description;
    this.trainer=this.program.trainer;
  });
}

  addProgram(){
    var val = {programID:this.programID,
              progName:this.progName,
              category:this.category,
              description:this.description,
              trainer:this.trainer};
        this.service.addProgram(val).subscribe(res=>{
          alert("Added Succsessfully");
       
         
        });
      }
       
    

  updateProgram(){
    var val = {programID:this.programID,
      progName:this.progName,
      category:this.category,
      description:this.description,
      trainer:this.trainer};
    this.service.updateProgram(val).subscribe(res=>{
      alert("Updated Succsessfully");
  });

  }
  

}
