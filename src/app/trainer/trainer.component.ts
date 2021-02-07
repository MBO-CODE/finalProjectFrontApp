import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.background='url(\'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\')no-repeat';
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundPosition ="center";

    
  }

}
