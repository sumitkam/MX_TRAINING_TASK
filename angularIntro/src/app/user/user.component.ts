import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { UserClass } from '../classes/user-class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private user : UserServiceService,private formBuilder: FormBuilder) { }

  fromValue!:FormGroup;
  users:any = [];
  // users:any = new UserClass()


  ngOnInit(): void {
    this.fromValue = this.formBuilder.group({
      name:[''],
      city:[''],
      email:[''],
      mobile:['']
    })

    this.getUserData();
  }

  getUserData(){
    this.user.getUser().subscribe((res)=>{
      this.users = res;
      console.warn(this.users);
    })
  }

  submitUser(){
    this.users.name = this.fromValue.value.name;
  }



}
