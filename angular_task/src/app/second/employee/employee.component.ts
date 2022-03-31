import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from 'src/app/service/emp-service.service';
import { FormBuilder,FormGroup,Validator } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private emp:EmpServiceService,private formBuilder:FormBuilder) { }

  fromValue!:FormGroup;
  employee:any = [];

  ngOnInit(): void {
    this.fromValue = this.formBuilder.group({
      name:[''],
      city:[''],
      dept:[''],
      salary:[''],
      manager:[''],
      exp:['']
    })
    this.getEmpData();
  }

  getEmpData(){
    this.emp.getEmp().subscribe((res:any)=>{
      this.employee = res;
      console.warn(this.employee);


    })
  }


  // transform(value: any, salary: any[]): any {
  //   return value.filterEmp(function(search:any){
  //     return search.salary.indexOf(salary) > -1
  //   })
  // }

}
