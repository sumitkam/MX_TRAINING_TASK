import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string='';
  password:string='';

  constructor(private router: Router,private auth:AuthServiceService ) {
    if(this.auth.loggedIn){
      this.router.navigate(['firstModule']);
    }
  }

  login(){
    if(this.username !== '' && this.password !== ''){
      if(this.auth.login(this.username,this.password)){
        this.router.navigate(['firstModule'])
      }else{
        alert('wrong credential');
      }
    }else{
      alert('username or password is wrong');
    }
  }

  ngOnInit(): void {
  }

  aftersubmit(){}

}
