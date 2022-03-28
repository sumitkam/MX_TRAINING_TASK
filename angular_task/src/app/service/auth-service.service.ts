import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login(userName:string,password:string){
    if(userName == 'admin' && password == 'admin'){
      localStorage.setItem("loginUser","loggedIn");
      return true;
    }
    return;
  }

  get loggedIn():boolean{
    return (localStorage.getItem("loginUser") !== null);
  }

  logOut(){
    localStorage.removeItem("loginUser")
  }


}
