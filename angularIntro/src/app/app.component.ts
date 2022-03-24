import { not } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularIntro';





//   a:any = ' ';
//   b:any = ' ';
//   c:any = this.a + this.b;

//   salary:any = " ";
//   silver:any = '';
//   gold:any = '';
//   platinum:any = '';
//   notElg:any ='';

//   p:any = '';
//   r:any = '';
//   n:any = '';
//   interest:any = '';
//   emi:any = '';

//   num:any = 0;

//   username:any = 'sumit';

//   users:any = [
//     {name:'sumit',city:'chandrapur',type:'3'},
//     {name:'ankit',city:'nagpur',type:'2'},
//     {name:'yami',city:'pune',type:'3'},
//     {name:'shital',city:'butibori',type:'1'},
//     {name:'rahul',city:'rajura',type:'2'},

//   ]

//   data:any = [
//     'sumit','i am from chadrapur','archarey','painting','like to watch web series'
//   ]

//   fruits:any = ['mango','apple'];
//   // fruit:any = '';
//   addfruit(fruit:string){
//     this.fruits.push(fruit);
//     //  this.fruit = '';
//     return this.fruits;
//   }


//   changeval(event: any){
//   this.num = event.target.value;

//  if(this.num >= 2000 && this.num <= 4000){
//    this.silver ='silver card';
//    return this.silver;
//  }else if(this.num >= 4000 && this.num <= 10000){
//    this.gold = 'gold card';
//    return this.gold;
//  }else{
//   this.platinum ='platinum card';
//   return this.platinum;
//  }
//  return this.num;
//   }



//   sum(){
//     this.c = this.a*1 + this.b *1 ;
//     return this.c;
//   }

//   check(){

//     if(this.salary >= 2000 && this.salary < 3000){
//        //alert('silver card');
//        this.silver = 'silver card';
//        return this.silver;
//     }
//     else if(this.salary >= 3000 && this.salary < 10000){
//      // alert('gold card');
//      this.gold = 'gold card';
//       return this.gold;
//     }
//     else{
//       //alert('Platinum card');
//       this.platinum = 'platinum card';
//       return this.platinum;
//     }
//   }

//   arry:any =['sumit','ankit','yami','rahul'];

//   emp = [
//     {name:'sumit',dept:'IT',sal:'700000'},
//     {name:'ankit',dept:'IT',sal:'200000'},
//     {name:'rahul',dept:'IT',sal:'600000'},
//     {name:'yami',dept:'IT',sal:'800000'},
//     {name:'frankalin',dept:'IT',sal:'500000'},
//     {name:'shital',dept:'IT',sal:'500000'},
//   ]

//   calculate(){
//     this.interest = (this.p * (this.r *0.01)) / this.n ;
//     this.emi = Math.round((this.p /this.n) + this.interest );
//     return this.emi;
//   }

}
