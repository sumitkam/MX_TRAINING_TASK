import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking-app',
  templateUrl: './banking-app.component.html',
  styleUrls: ['./banking-app.component.css']
})
export class BankingAppComponent implements OnInit {

  constructor() { }

  balance:any = '';
  user:any = '';
  amount:any = '';
  withdrawAmt:any = '';
  depositeAmt:any = '';


  // if(this.amount == ''){

  createAcc(amount:any){

    //   alert("Your amount is empty else enter correct input");
    // }else if(this.amount < 5000){
    //   alert('Amount should be greater than 5000');
    // }else{
    //     this.amount = this.balance;
    //     return this.balance;
    // }

    alert(this.amount)


  }

  ngOnInit(): void {
  }

}
