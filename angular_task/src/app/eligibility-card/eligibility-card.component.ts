import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-card',
  templateUrl: './eligibility-card.component.html',
  styleUrls: ['./eligibility-card.component.css']
})
export class EligibilityCardComponent implements OnInit {

  amount !: number;
  silver : boolean =false;
  gold : boolean =false;
  platinum : boolean =false;
  notEg : boolean =false;


  constructor() { }

  ngOnInit(): void {
  }

  check(){
    if(this.amount >= 20000 && this.amount < 30000 ){
      this.silver = true;
      this.amount = 0;
    }else if(this.amount >= 30000 && this.amount < 50000 ){
     this.gold = true;
    }else if(this.amount >= 50000 ){
      this.platinum = true;
    }
    else{
      this.notEg = true;
    }
  }

}
