import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking-app',
  templateUrl: './banking-app.component.html',
  styleUrls: ['./banking-app.component.css']
})
export class BankingAppComponent implements OnInit {

  constructor() { }

  balance:any;
  amount:any;
  withdrawAmt:any;
  depositeAmt:any;




  create(){
    if(this.amount == ''){
      alert("Your amount is empty else enter correct input");
  }
  else if(this.amount<5000){
      alert('Amount should be greater than 5000');
  }
  else{
     this.balance = this.amount;
     this.amount = '';

  }
  }

  withdraw(){
    this.withdrawAmt = parseInt(this.balance ) - parseInt(this.withdrawAmt);
    if(this.withdrawAmt == ''){
      alert("Your amount is empty ");
  }
  else if(this.withdrawAmt > this.balance){
      alert('Your amount is empty else enter correct input');
  }
  else{
     this.balance = parseInt(this.withdrawAmt);
     this.amount = '';
  }
  }

  deposite(){
    this.depositeAmt = parseInt(this.balance ) + parseInt(this.withdrawAmt);
    if(this.withdrawAmt == ''){
      alert("Your amount is empty ");
  }
  else{
     this.balance = parseInt(this.depositeAmt);
     this.amount = '';
  }
  }

  ngOnInit(): void {
  }

}
