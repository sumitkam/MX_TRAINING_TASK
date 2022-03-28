import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable, observable,throwError } from 'rxjs';
import { map ,catchError } from 'rxjs';
import { UserClass } from '../classes/user-class';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users!:UserClass;
  baseUrl = './assets';

  constructor(private http:HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user_data.json`).pipe(map((res)=>{
      this.users = res;
      return this.users;

    }),

    catchError(this.errorHandler)
    )
  }

  postUser(data:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/user_data.json`,data).pipe(map((res)=>{
      this.users = res;
      return this.users;

    }),

    catchError(this.errorHandler)
    )
  }
  putUser(data:any,id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user_data.json`+id,data).pipe(map((res)=>{
      this.users = res;
      return this.users;

    }),

    catchError(this.errorHandler)
    )
  }
  deleteUser(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user_data.json`+id).pipe(map((res)=>{
      this.users = res;
      return this.users;

    }),

    catchError(this.errorHandler)
    )
  }
  errorHandler(error:HttpErrorResponse){
    console.warn(error);
    return throwError("error");
  }

}
