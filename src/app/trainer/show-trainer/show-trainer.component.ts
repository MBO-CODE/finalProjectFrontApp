import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-trainer',
  templateUrl: './show-trainer.component.html',
  styleUrls: ['./show-trainer.component.css']
})
export class ShowTrainerComponent implements OnInit {

  constructor(private service:SharedService) { }

  TrainerList:any =[];

  ModalTitle:string;
  ActivateAddEditTrainerComp:boolean = false;
  trainer:any;
  photoFile:string;
  
  
  

  ngOnInit(): void {
    this.refreshTrainerList();
  }

  
  genNumber():number{
    return Math.floor((Math.random()*100));
  }

  addClick(){
    this.trainer= {
      trainerID: 0,
      name: "",
      email:"",
      gym: "",
      age: "",
      photoFile: "",
      trainerInfo: ""
      
    }
    this.ModalTitle="Add Trainer";
    this.ActivateAddEditTrainerComp=true;

  }

  editClick(item){
    this.trainer=item;
    this.ModalTitle="Edit Trainer";
    this.ActivateAddEditTrainerComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteTrainer(item.trainerID).subscribe(data =>{
        alert(data.toString());
        this.refreshTrainerList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTrainerComp = false;
    this.refreshTrainerList();
  }

  refreshTrainerList(){
    this.service.getTrainerList().subscribe(data =>{
      this.TrainerList = data;
    });
  }

}
