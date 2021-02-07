import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('bodycustom');
    document.body.style.background='#000';
    document.body.style.background='url(\'https://images.pexels.com/photos/6111/smartphone-friends-internet-connection.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\') no-repeat';
    document.body.style.backgroundSize="cover";
  }

}
