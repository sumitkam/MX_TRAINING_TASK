import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  @Output() addNewFruit = new EventEmitter<string>();

  addfruit(fruit:string){
    this.addNewFruit.emit(fruit);
  }


  ngOnInit(): void {
  }

}
