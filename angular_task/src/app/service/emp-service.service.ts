import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Empclass } from '../class/empclass';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  employee!:Empclass;
  baseUrl = './assets'

  constructor(private http : HttpClient) { }

  getEmp():Observable<any>{
    return this.http.get(`${this.baseUrl}/employee.json`).pipe(map((res)=>{
      this.employee = res;
      return this.employee;
    }),
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:HttpErrorResponse){
    console.warn(error);
    return throwError('error');

  }

}
