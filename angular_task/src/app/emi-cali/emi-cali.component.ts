import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-cali',
  templateUrl: './emi-cali.component.html',
  styleUrls: ['./emi-cali.component.css']
})
export class EmiCaliComponent implements OnInit {

  amount!:number;
  interest!: number;
  year !:number;
  I !:number;
  emi!:number;
  monthly!:number;
  monthlyI!:number;
  yearly!:number;
  totalI!:number;
  totalP!:number;

  tableShow :boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

  overAllEmi(){

    this.tableShow = true
    this.I =Math.round((this.amount * (this.interest *0.01)) / this.year)  ;
    this.emi = Math.round((this.amount /this.year) + this.I);
    this.yearly = Math.round((this.amount * this.interest) / 100);
    this.monthlyI = Math.round(this.yearly / 12);
    this.monthly = Math.round(this.monthlyI + (this.amount / this.year));
    this.totalI = Math.round(this.monthlyI * this.year);
    this.totalP = Math.round(this.monthly * this.year);
  }

}
