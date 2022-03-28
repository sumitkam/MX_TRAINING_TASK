import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login(username:string,password:string){
    if(username == "sumit" && password == 'password'){
      localStorage.setItem("loginUser","loggedIn");
      return true;
    }
    return;
  }

  get loggedIn():boolean{
    return (localStorage.getItem("loginUser") !== null)
  }

  logOut(){
    localStorage.removeItem("loginUser");
  }
}
